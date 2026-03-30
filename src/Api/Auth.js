import api, { setToken, clearToken } from './Client';

function mapRoleToNumber(role) {
    if (typeof role === 'number') return role;
    const r = String(role).toLowerCase();
    if (r === 'trainer') return 1;
    if (r === 'admin') return 2;
    return 0; // Client
}

function mapRoleToString(role) {
    if (typeof role === 'string') return role;
    if (typeof role === 'number') return role === 1 ? 'Trainer' : role === 2 ? 'Admin' : 'Client';
    return 'Client';
}

function formatValidation(data) {
    if (!data) return null;
    if (data.errors && typeof data.errors === 'object') {
        const parts = [];
        for (const [key, val] of Object.entries(data.errors)) {
            if (Array.isArray(val)) parts.push(`${key}: ${val.join(', ')}`);
            else parts.push(`${key}: ${String(val)}`);
        }
        return parts.join(' | ');
    }
    if (data.title) return data.title + (data.detail ? `: ${data.detail}` : '');
    if (data.message) return data.message;
    return JSON.stringify(data);
}

async function register({ fullname, email, password, role = 'Client', fullName }) {
    // przygotuj domyślny payload: role jako string (najpierw próbujemy tak wysłać)
    let payload = {
        email,
        fullname,
        password,
        role: mapRoleToString(role),
    };
    if (fullName) payload.fullName = fullName;

    console.log('Auth.register initial payload:', payload);

    let triedReq = false;
    let triedRoleNumber = false;
    const maxAttempts = 3;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        try {
            const res = await api.post('/auth/register', payload);
            console.log('Auth.register response:', res.data);
            return res.data;
        } catch (err) {
            const data = err?.response?.data;
            const formatted = formatValidation(data);
            console.error('Auth.register attempt', attempt + 1, 'error:', formatted || err.message);

            // jeśli brak pola `req` -> ustaw i spróbuj ponownie
            if (!triedReq && data && data.errors && Object.prototype.hasOwnProperty.call(data.errors, 'req')) {
                triedReq = true;
                payload = { ...payload, req: true };
                console.log('Retrying with payload.req = true');
                continue;
            }

            // jeśli błąd konwersji enum dla role -> spróbuj wysłać numericzną wartość enum
            const roleConversionError =
                (typeof formatted === 'string' && formatted.toLowerCase().includes('could not be converted')) ||
                (data && (data.errors && (data.errors['$.role'] || data.errors.role))) ||
                (typeof formatted === 'string' && formatted.toLowerCase().includes('userrole'));
            if (!triedRoleNumber && roleConversionError) {
                triedRoleNumber = true;
                payload = { ...payload, role: mapRoleToNumber(role) };
                console.log('Retrying with role as number:', payload.role);
                continue;
            }

            // jeżeli nic z powyższego nie pasuje — zwróć czytelny błąd do UI
            const message = formatted || err.message || 'Błąd rejestracji';
            const error = new Error(message);
            error.response = err.response;
            throw error;
        }
    }

    // jeśli pętle się wykonały a nie zwrócono — rzuć ogólny błąd
    throw new Error('Nie udało się zarejestrować (max retry).');
}

async function login({ email, password }) {
    const res = await api.post('/auth/login', { email, password });
    if (res.data && res.data.token) {
        setToken(res.data.token);
    }
    return res.data;
}

async function getProfile() {
    const res = await api.get('/profile/me');
    return res.data;
}

export default { register, login, getProfile, setToken, clearToken };