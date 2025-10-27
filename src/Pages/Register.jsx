import React from "react";
import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png"; // Import the image properly
import style from "../Components/css/Register.module.css";

const Register = () => {
    return (
        <div className={style.container}>
            <img src={Logo} alt="Logo" className={style.logo} />
            <Progress />
        </div>
    );
};

export default Register;