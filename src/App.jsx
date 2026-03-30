import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./Pages/Register.jsx";
import Reservation from "./Pages/Reservation.jsx";
import Settings from "./Pages/Settings.jsx";
import Reports from "./Pages/Reports.jsx";
import Training from "./Pages/Workout/Training.jsx";
import Login from "./Components/Login.jsx";

const App = () => {
    // Dodajemy ten blok, aby motyw ładował się na starcie aplikacji na każdej podstronie
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === "Jasny") {
            // Przełączamy stronę w tryb jasny
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            // Usuwamy atrybut lub ustawiamy ciemny, jeśli taki jest domyślny
            document.documentElement.removeAttribute('data-theme');
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
                <Route path={"/login"} element={<Login/>} />
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