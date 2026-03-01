import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./Pages/Register.jsx";
import Reservation from "./Pages/Reservation.jsx";
import Settings from "./Pages/Settings.jsx";
import Reports from "./Pages/Reports.jsx";
import Training from "./Pages/Workout/Training.jsx";

const App = () => {
    // Dodajemy ten blok, aby motyw ładował się na starcie aplikacji na każdej podstronie
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === "Jasny") {
            document.documentElement.style.backgroundColor = "#f8f9fa";
            document.documentElement.style.color = "#242424";

            // Pasek - Jasny
            document.documentElement.style.setProperty('--nav-bg', '#ffffff');
            document.documentElement.style.setProperty('--nav-icon-filter', 'none');
            document.documentElement.style.setProperty('--nav-shadow', '0 -2px 10px rgba(0, 0, 0, 0.1)');
        } else {
            // Domyślny lub zapisany ciemny motyw
            document.documentElement.style.backgroundColor = "#242424";
            document.documentElement.style.color = "rgba(255, 255, 255, 0.87)";

            // Pasek - Ciemny
            document.documentElement.style.setProperty('--nav-bg', '#1e1e1e');
            document.documentElement.style.setProperty('--nav-icon-filter', 'brightness(0) invert(1)');
            document.documentElement.style.setProperty('--nav-shadow', '0 -2px 10px rgba(0, 0, 0, 0.3)');
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/register"} element={<Register/>} />
                <Route path={"/reservation"} element={<Reservation/>} />
                <Route path={"/settings"} element={<Settings/>} />
                <Route path={"/reports"} element={<Reports/>} />
                <Route path={"/training"} element={<Training/>} />
                <Route path={"/"} element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

const rootElement = document.getElementById("app");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App
            />

        </React.StrictMode>
    );
} else {
    console.error("Nie znaleziono elementu #app. Upewnij się, że istnieje w index.html");
}

export default App;