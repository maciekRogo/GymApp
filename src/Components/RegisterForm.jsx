import React, { useState } from 'react';
import style from '../Components/css/RegisterForm.module.css';
import auth from '../api/auth';

const RegisterForm = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMsg(null);
        console.log(fullname, email, password);

        try {
            await auth.register({ fullname, email, password, role: 'Client' });
            setMsg('Zarejestrowano. Przekierowanie do logowania...');
            setTimeout(() => (window.location.href = '/auth/login'), 1000);
        } catch (err) {
            console.error(err);
            // korzystaj z err.message, bo `Auth.js` teraz rzuca Error z czytelnym komunikatem
            const friendly = err?.message || err?.response?.data?.message || 'Błąd rejestracji';
            setError(friendly);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.naglowek}>
            <h1>Rejestracja</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <a href="/auth/login">Login</a>

                <input
                    type="text"
                    placeholder="Full Name"
                    className={style.input}
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    className={style.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className={style.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                />

                <button type="submit" className={style.button} disabled={loading}>
                    {loading ? 'Rejestruję...' : 'Register'}
                </button>

                {msg && <div style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
                {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
            </form>
        </div>
    );
};

export default RegisterForm;