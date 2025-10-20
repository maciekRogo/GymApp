import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Components/css/Nav.module.css';
import home from "../Components/img/homeic.svg"
import training from "../Components/img/dumbell.svg"
import reservation from "../Components/img/note.svg"
import settings from "../Components/img/settings.svg"
import reports from "../Components/img/reports.svg"

const Nav = () => {


    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"><img src={training} alt="icon" /></Link></li>
                    <li><Link to="/"><img src={reservation} alt="icon" /></Link></li>
                    <li><Link to="/"><img src={home} alt="icon" /></Link></li>
                    <li><Link to="/"><img src={reports} alt="icon" /></Link></li>
                    <li><Link to="/"><img src={settings} alt="icon" /></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;