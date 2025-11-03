import React from "react";
import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png"; // Import the image properly
import style from "../Components/css/Register.module.css";
import RegisterForm from "../Components/RegisterForm.jsx";

const Register = () => {
    return (
        <div className={style.container}>
            <img src={Logo} alt="Logo" className={style.logo} />
            <RegisterForm/>
        </div>
    );
};

export default Register;