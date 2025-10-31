import React, { useState } from 'react';
import Nav from "../Components/Nav.jsx";


// APLIKACJA MA DWA KOMPONENTY, USER PROFIL KTORY DOCELOWO BEDZIE POBIERAC INFORMACJE Z BAZY DNAYCH ORAZ USTAWIENIA OGOLNE KTORE TRZEBA BEDZIE ZAPISYWAC

// nie uzywajcie chatagpt wklejajac bezmyslnie kod z chata bo potem sa bledy i nie dziala


const UserProfile = ({ userName, userImage }) => {
    return (
        <div>
            <img src={userImage} alt="Profil użytkownika" />
            <div>
                <h2>{userName}</h2>
                <p>Członek siłowni</p>
            </div>
        </div>
    );
};

const SettingsList = ({ settings, setSettings }) => {
    return (
        <div>
            <div>
                <label>Język aplikacji</label>
                <select
                    value={settings.language}
                    onChange={(e) =>
                        setSettings({ ...settings, language: e.target.value })
                    }
                >
                    <option>Polski</option>
                    <option>Angielski</option>
                    <option>Niemiecki</option>
                </select>
            </div>

            <div>
                <label>Motyw</label>
                <select
                    value={settings.theme}
                    onChange={(e) =>
                        setSettings({ ...settings, theme: e.target.value })
                    }
                >
                    <option>Jasny</option>
                    <option>Ciemny</option>
                    <option>Automatyczny</option>
                </select>
            </div>

            <div>
                <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) =>
                        setSettings({ ...settings, notifications: e.target.checked })
                    }
                />
                <label>Powiadomienia e-mail</label>
            </div>
        </div>
    );
};

const Settings = () => {
    //PONIZEJ ZMIENNE NA PRZYSZLE POBIERANIE INFORMACJI O PROFILU TAKIE JAK ZDJEICE PROFILU I IMIE I NAZWISKO (trzeba bedzie zrobic useeffect zamiast usestate najprawdopodobniej)
    const [userName, setUserName] = useState("Jan Kowalski");
    const [userImage, setUserImage] = useState("https://via.placeholder.com/100");

    //PONIZEJ  DANE USTAWIENIA
    const [settings, setSettings] = useState({
        language: "Polski",
        notifications: true,
        theme: "Jasny",
    });

    return (
        <div>
            <Nav />
            <h1>Ustawienia</h1>
            <UserProfile userName={userName} userImage={userImage} />

            <SettingsList settings={settings} setSettings={setSettings} />
        </div>
    );
};

export default Settings;
