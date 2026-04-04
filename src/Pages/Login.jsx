import React from "react";
// import Progress from "../Components/Progress.jsx";
import Logo from "../Pictures/Logo.png";
import style from "../Components/css/Register.module.css";
import LoginForm from "../Components/LoginForm.jsx";

const Login = () => {
    return (
        <div className={style.container}>
            <img src={Logo} alt="Logo" className={style.logo} />
            <LoginForm/>
        </div>
    );
};

export default Login;