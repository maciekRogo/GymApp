import React from 'react';
import { Link } from 'react-router-dom';
import style from "../Components/css/Nav.module.css";

const Nav = () => {


    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/cennik">Cennik</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/zaufali">Zaufali mi</Link></li>
                    <li><Link to="/omnie">O mnie</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;