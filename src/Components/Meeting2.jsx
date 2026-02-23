import React from "react";
import styles from "./css/Meeting2.module.css";

const Meeting2 = () => {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>Przyszłe spotkanie</h3>
            <p className={styles.details}>Data: numer 2</p>
            <p className={styles.details}>Nazwa: Spotkanie zespołu</p>
        </div>
    );
};

export default Meeting2;