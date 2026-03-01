import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Components/css/Nav.module.css'; // import modułu
import home from "../Components/img/homeic.svg"
import training from "../Components/img/dumbell.svg"
import reservation from "../Components/img/note.svg"
import settings from "../Components/img/settings.svg"
import reports from "../Components/img/reports.svg"

const Nav = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="/training"><img className={styles.navIcon} src={training} alt="icon" /></Link></li>
                    <li className={styles.navItem}><Link to="/reservation"><img className={styles.navIcon} src={reservation} alt="icon" /></Link></li>
                    <li className={styles.navItem}><Link to="/"><img className={styles.navIcon} src={home} alt="icon" /></Link></li>
                    <li className={styles.navItem}><Link to="/reports"><img className={styles.navIcon} src={reports} alt="icon" /></Link></li>
                    <li className={styles.navItem}><Link to="/settings"><img className={styles.navIcon} src={settings} alt="icon" /></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;