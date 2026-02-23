// javascript
// File: `src/Pages/LandingPage.jsx`
import React from 'react';
import Nav from "../Components/Nav.jsx";
import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png";
import style from "../Components/css/Register.module.css";
import Meetings from "../Components/Meetings.jsx";
import Meeting2 from "../Components/Meeting2.jsx";
import Quote from "../Components/Quote.jsx";

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
                        <div className={style.meetingItem}>
                            <Meetings />
                        </div>
                        <div className={style.meetingItem}>
                            <Meeting2 />
                        </div>
                        <div className={style.quoteWrapper}>
                            <Quote />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
