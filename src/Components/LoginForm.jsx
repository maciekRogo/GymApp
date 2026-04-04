import React, {useState} from 'react';
import style from "../Components/css/RegisterForm.module.css";
import auth from "../Api/Auth.js";

const LoginForm = () => {
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

        try {
            await auth.login({email, password});
            setMsg('Zalogowano!');
            setTimeout(() => (window.location.href = '/'), 1000);
        } catch (err) {
            console.error(err);
            const friendly = err?.message || err?.response?.data?.message || 'Błąd logowania';
            setError(friendly);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.naglowek}>
            <h1>Logowanie</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <a href="/register">Nie masz konta? Utwórz je!</a>


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
                    {loading ? 'Loguję...' : 'Zaloguj się'}
                </button>

                {msg && <div style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
                {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
            </form>
        </div>
    );
};

export default LoginForm;