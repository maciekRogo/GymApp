import React, { useState, useEffect } from 'react';
import Nav from "../Components/Nav.jsx";
import profile_pic from "../Components/img/porfile_picture_default.jpg"
import style from "../Components/css/Settings.module.css";
//co do bledow z chata to sie je przeglada a jak juz wystepuja to rzadko, a tak poza tym to powiedz jakie bledy a sie je naprawi a nie narzekasz bezsensownie tym bardziej ZE JEDYNY BLAD TO PIEPRZONA IKONA KTORA BYLA ZAZNACZONA W KOMENTARZACH BO INACZEJ MIALBYS 1000 WIECEJ BLEDOW, ale ogolnie rozumiem ze mogles nie zrozumiec bo jak widzisz randomowy link do byle czego to juz masz zawal serca i z niczym ci sie nie kojarzu jednak to bylo najlepsze rozwiazanie na "szybko:

// ogolnie to kod jest nieprzejrzysty ale nie chcialem robic smietnika w globalnym css bez wstepnych, ogolnie na rozmiar tego projektu ograniczyl bym sie do prostej moze czasami bardziej pracochlonnej strukturu bo sama analiza tych cssow zajmuje wiecej czasu niz robienie ich na "rzeznika"
const Settings = () => {
    const [userName] = useState("Robert Świder");
    const [theme, setTheme] = useState("Ciemny");
    const [language, setLanguage] = useState("Polski");
    const [notifications, setNotifications] = useState(true);

    // Dobra to tak, zmiana koloru zmienia tylko kolor w body co znajduje sie ponizej
    useEffect(() => {
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

    const cardStyle = {
        padding: "15px",
        backgroundColor: "var(--card-bg)", // UŻYWAMY ZMIENNEJ CSS!
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
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

    return (
        <div>
            <Nav />
            <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
                <h1>Ustawienia</h1>

                <div style={{ ...cardStyle, display: "flex", gap: "20px", marginBottom: "30px" }}>
                    <img src={profile_pic} alt="Profil" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                    <div>
                        <h2 style={{ margin: "0 0 5px 0" }}>{userName}</h2>
                        <p style={{ margin: 0, color: "var(--muted-text)" }}>Członek siłowni</p>
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

                    <div style={cardStyle}>
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
                    <button className={style.button} onClick={logOut}>
                        Wyloguj się
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Settings;
