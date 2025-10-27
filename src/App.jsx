import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./Pages/Register.jsx";
import Reservation from "./Pages/Reservation.jsx";
import Settings from "./Pages/Settings.jsx";
import Reports from "./Pages/Reports.jsx";
import Training from "./Pages/Training.jsx";


const App = () => {
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