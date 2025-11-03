import React, { useState, useEffect } from 'react';
import Nav from "../Components/Nav.jsx";

//co do bledow z chata to sie je przeglada a jak juz wystepuja to rzadko, a tak poza tym to powiedz jakie bledy a sie je naprawi a nie narzekasz bezsensownie tym bardziej ZE JEDYNY BLAD TO PIEPRZONA IKONA KTORA BYLA ZAZNACZONA W KOMENTARZACH BO INACZEJ MIALBYS 1000 WIECEJ BLEDOW, ale ogolnie rozumiem ze mogles nie zrozumiec bo jak widzisz randomowy link do byle czego to juz masz zawal serca i z niczym ci sie nie kojarzu jednak to bylo najlepsze rozwiazanie na "szybko:

// ogolnie to kod jest nieprzejrzysty ale nie chcialem robic smietnika w globalnym css bez wstepnych, ogolnie na rozmiar tego projektu ograniczyl bym sie do prostej moze czasami bardziej pracochlonnej strukturu bo sama analiza tych cssow zajmuje wiecej czasu niz robienie ich na "rzeznika"
const Settings = () => {
    const [userName, setUserName] = useState("Jan Kowalski");
    //PONIZEJ TA MAJESATYCZNA IKONA PROWADZACA DO LINKU KTORY NIE MA ZNACZENIA BO JEST TYLKO PO TO ZEBY BYLO W PRZYSZLOSCI TO POBIERTANE Z BAZY DANYCH O ILE NIE ZMIENIMY PLANOW
    const [userImage, setUserImage] = useState("https://via.placeholder.com/100");
    const [theme, setTheme] = useState("Ciemny");
    const [language, setLanguage] = useState("Polski");
    const [notifications, setNotifications] = useState(true);

    // Dobra to tak, zmiana koloru zmienia tylko kolor w body co znajduje sie ponizej
    useEffect(() => {
        if (theme === "Jasny") {
            document.body.style.backgroundColor = "#f8f9fa";
            document.body.style.color = "#242424";
        } else if (theme === "Ciemny") {
            document.body.style.backgroundColor = "#242424";
            document.body.style.color = "rgba(255, 255, 255, 0.87)";
        }

        // zapis do local storage (ta klasyczna linijka kodu po ktorej skasowaniu program robi fikolka)
        localStorage.setItem('theme', theme);
    }, [theme]);

    // ponizej wczytuje info o motywie z localstorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <div>
            <Nav />
            <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
                <h1>Ustawienia</h1>

                {/*
                 ponizej ten profil co bedzie pobierany z bd
                 */}
                <div style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px",
                    backgroundColor: theme === "Jasny" ? "#ffffff" : "#0e141b",
                    borderRadius: "8px",
                    marginBottom: "30px"
                }}>
                    <img
                        src={userImage}
                        alt="Profil"
                        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                    />
                    <div>
                        <h2 style={{ margin: "0 0 5px 0" }}>{userName}</h2>
                        <p style={{ margin: 0, opacity: 0.7 }}>Członek siłowni</p>
                    </div>
                </div>

                {/*
                 reszta bzdetnych ustawien
                 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{
                        padding: "15px",
                        backgroundColor: theme === "Jasny" ? "#ffffff" : "#0e141b",
                        borderRadius: "8px"
                    }}>
                        <label style={{ display: "block", marginBottom: "8px" }}>Język aplikacji</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid rgba(255,255,255,0.2)",
                                backgroundColor: theme === "Jasny" ? "#f8f9fa" : "#242424",
                                color: theme === "Jasny" ? "#242424" : "rgba(255,255,255,0.87)",
                                cursor: "pointer"
                            }}
                        >
                            <option>Polski</option>
                            <option>Angielski</option>
                            <option>Niemiecki</option>
                        </select>
                    </div>

                    <div style={{
                        padding: "15px",
                        backgroundColor: theme === "Jasny" ? "#ffffff" : "#0e141b",
                        borderRadius: "8px"
                    }}>
                        {/*
                 chyba najwiekszy syf czyli motyw
                 */}

                        <label style={{ display: "block", marginBottom: "8px" }}>Motyw</label>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid rgba(255,255,255,0.2)",
                                backgroundColor: theme === "Jasny" ? "#f8f9fa" : "#242424",
                                color: theme === "Jasny" ? "#242424" : "rgba(255,255,255,0.87)",
                                cursor: "pointer"
                            }}
                        >
                            <option>Jasny</option>
                            <option>Ciemny</option>
                        </select>
                    </div>

                    <div style={{
                        padding: "15px",
                        backgroundColor: theme === "Jasny" ? "#ffffff" : "#0e141b",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
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
