import React from "react";
import styles from "./css/Meetings.module.css";

const Meetings = () => {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>Przyszłe spotkanie</h3>
            <p className={styles.details}>Data: 2023-12-01</p>
            <p className={styles.details}>Nazwa: Spotkanie zespołu</p>
        </div>
    );
};

export default Meetings;