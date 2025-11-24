import React from 'react';
import Nav from "../Components/Nav.jsx";
import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png";
import style from "../Components/css/Register.module.css";
import Meetings from "../Components/Meetings.jsx";

const LandingPage = () => {
    return (
        <>
            <Nav />
            <div className={style.container}>
                <img src={Logo} alt="Logo" className={style.logo} />
                <div className={style.content}>
                    <div className={style.progress}>
                        <Progress />
                    </div>
                    <div className={style.meetings}>
                        <Meetings />
                        <Meetings />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;