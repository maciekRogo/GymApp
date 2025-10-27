import React from 'react';
import style from "../Components/css/Progress.module.css";

const Progress = () => {
    return (
        <div className={style.container}>
            <h2> Zrealizowałeś x z x treningów w tym tygodniu!</h2>
            <div className={style.progress}>

                <div className={style["progress-value"]}></div>
            </div>
        </div>
    );
};

export default Progress;