import React from 'react';
import style from "../Components/css/RegisterForm.module.css";
const RegisterForm = () => {
    return (
        <div className={style.naglowek}>
            <h1>Rejestracja</h1>
            <form className={style.form}>
                <a href="/auth/login">Login</a>
                <input type="text" placeholder="Username" className={style.input}/>
                <input type="email" placeholder="Email" className={style.input}/>
                <input type="password" placeholder="Password" className={style.input}/>
                <button type="submit" className={style.button}>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;