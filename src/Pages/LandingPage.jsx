import React from 'react';
import Nav from "../Components/Nav.jsx";
import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png";
import style from "../Components/css/Register.module.css";


const LandingPage = () => {
    return (
        <>
            <Nav/>
            <div className={style.container}>
            <img src={Logo} alt="Logo" className={style.logo}/>
                </div>
            <Progress/>
        </>
    );
};

export default LandingPage;
