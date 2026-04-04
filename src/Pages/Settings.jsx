import React, { useState, useEffect } from 'react';
import Nav from "../Components/Nav.jsx";
import profile_pic from "../Pictures/img.png"
import style from "../Components/css/Settings.module.css";
import auth from "../Api/Auth.js";
//co do bledow z chata to sie je przeglada a jak juz wystepuja to rzadko, a tak poza tym to powiedz jakie bledy a sie je naprawi a nie narzekasz bezsensownie tym bardziej ZE JEDYNY BLAD TO PIEPRZONA IKONA KTORA BYLA ZAZNACZONA W KOMENTARZACH BO INACZEJ MIALBYS 1000 WIECEJ BLEDOW, ale ogolnie rozumiem ze mogles nie zrozumiec bo jak widzisz randomowy link do byle czego to juz masz zawal serca i z niczym ci sie nie kojarzu jednak to bylo najlepsze rozwiazanie na "szybko:

// ogolnie to kod jest nieprzejrzysty ale nie chcialem robic smietnika w globalnym css bez wstepnych, ogolnie na rozmiar tego projektu ograniczyl bym sie do prostej moze czasami bardziej pracochlonnej strukturu bo sama analiza tych cssow zajmuje wiecej czasu niz robienie ich na "rzeznika"
const Settings = () => {
    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPhone,setUserPhone] = useState("");
    const [userRole,setUserRole] = useState("");
    const [userLicense,setUserLicense] = useState("");
    const [userNewName,setUserNewName] = useState("");
    const [userNewPhone,setUserNewPhone] = useState("");
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [msg, setMsg] = useState(null);
    const [error, setError] = useState(null);
    const [theme, setTheme] = useState("Ciemny");
    const [language, setLanguage] = useState("Polski");
    const [notifications, setNotifications] = useState(true);

    const AUTO_DISMISS_MS = 2500;


    useEffect(() => {
        const timers = [];
        if (msg) timers.push(setTimeout(() => setMsg(null), AUTO_DISMISS_MS));
        if (error) timers.push(setTimeout(() => setError(null), AUTO_DISMISS_MS));
        return () => timers.forEach(clearTimeout);
    }, [msg, error]);
    // Dobra to tak, zmiana koloru zmienia tylko kolor w body co znajduje sie ponizej
    useEffect(() => {
        setMsg(null)
        setError(null)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // ponizej wczytuje info o motywie z localstorage
    useEffect(() => {
        if (theme === "Jasny") {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        let mounted = true;

        async function fetchProfile() {
            try {
                const profile = await auth.getProfile();
                console.log("Profile fetched:", profile);
                if (!mounted || !profile) return;
                setUserName(profile.fullName || "");
                setUserEmail(profile.email || "");
                setUserPhone(profile.phone || "");
                if(profile.role ==="Client") setUserRole("Klient");
                if(profile.isAccountEnabled===true) setUserLicense("Aktywna");
                setUserNewName(fullName);
                setUserNewPhone(phone);
            } catch (err) {
                const friendly = err?.message || err?.response?.data?.message || 'Błąd logowania';
                setError(friendly);
                const status = err?.response?.status;
                if (status === 401) {
                    if (auth.clearToken) auth.clearToken();
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            }
        }

        fetchProfile();
        return () => { mounted = false; };
    }, []);

    const cardStyle = {
        padding: "15px",
        backgroundColor: "var(--card-bg)", // UŻYWAMY ZMIENNEJ CSS!
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };

    const inputStyle = {
        width: "100%",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid var(--border-color)",
        backgroundColor: "var(--input-bg)",
        color: "var(--text-color)",
        cursor: "pointer"
    };

    const logOut = () =>{
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const changeInfo = async () => {
        try {
            await auth.updateProfile({ fullName: userNewName, phone: userNewPhone });
            setUserName(userNewName);
            setUserPhone(userNewPhone);
            setMsg("Informacje zostały zaktualizowane!");

        } catch (err) {
            const friendly = 'Błąd logowania';
            setError(friendly);
        }
    };

    const changePassword = async () => {
        try{
            await auth.changePassword(oldPassword, newPassword);
            setMsg("Hasło zostało zmienione!");

        } catch (err){
            const friendly = 'Błąd logowania';
            setError(friendly);
        }

    }

    return (
        <div>
            <Nav />
            <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
                <h1>Ustawienia</h1>

                <div style={{ ...cardStyle, display: "flex", gap: "20px", marginBottom: "30px" }}>
                    <img src={profile_pic} alt="Profil" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                    <div>
                        <h2 style={{ margin: "0 0 5px 0" }}>{userName || "Ładowanie..."}</h2>
                        <p style={{ margin: 0, color: "var(--muted-text)" }}>{userEmail || "Ładowanie..."}</p>
                        <p style={{ margin: 0, color: "var(--muted-text)" }}>{userRole || "Ładowanie..."}</p>
                        <p style={{ margin: 0, color: "var(--muted-text)" }}>Licencja: {userLicense || "Ładowanie..."}</p>
                        <p style={{ margin: 0, color: "var(--muted-text)" }}>Nr Telefonu: {userPhone || "Brak"}</p>
                        <button className={style.button} onClick={logOut}>
                            Wyloguj się
                        </button>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={cardStyle} className={style.card}>
                        <label style={{ display: "block", marginBottom: "8px" }}>Zmiana imienia bądź numeru telefonu</label>
                        <input type="text" placeholder={userName} value={userNewName} onChange={(e) => setUserNewName(e.target.value)} style={inputStyle} />
                        <input type="number" placeholder={userPhone} value={userNewPhone} onChange={(e) => setUserNewPhone(e.target.value)} style={inputStyle} />
                        <button className={style.buttonChange} onClick={changeInfo}>
                            Zapisz zmiany
                        </button>
                        {msg && <div className={style.input} style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
                        {error && <div className={style.input}  style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={cardStyle} className={style.card}>
                        <label style={{ display: "block", marginBottom: "8px" }}>Zmiana hasła</label>
                        <input type="password" placeholder="Wprowadź aktualne hasło"  value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} style={inputStyle} />
                        <input type="password" placeholder="Wprowadź nowe hasło"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={inputStyle} />
                        <button className={style.buttonChange} onClick={changePassword}>
                            Zapisz zmiany
                        </button>
                        {msg && <div className={style.input}  style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
                        {error && <div className={style.input}  style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={cardStyle}>
                        <label style={{ display: "block", marginBottom: "8px" }}>Język aplikacji</label>
                        <select value={language} onChange={(e) => setLanguage(e.target.value)} style={inputStyle}>
                            <option>Polski</option>
                            <option>Angielski</option>
                            <option>Niemiecki</option>
                        </select>
                    </div>

                    <div style={cardStyle} >
                        <label style={{ display: "block", marginBottom: "8px" }}>Motyw</label>
                        <select value={theme} onChange={(e) => setTheme(e.target.value)} style={inputStyle}>
                            <option>Jasny</option>
                            <option>Ciemny</option>
                        </select>
                    </div>

                    <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "8px" }}>
                        <input
                            type="checkbox"
                            id="notifications"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                        <label htmlFor="notifications">Powiadomienia e-mail</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Settings;
