import React, { useEffect, useState } from 'react';
import style from "../Components/css/Progress.module.css";

const Progress = () => {
    const [stats, setStats] = useState({ completed: 0, totalGoal: 5 });

    useEffect(() => {
        const fetchProgress = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('https://localhost:7061/api/stats/dashboard', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        };
        fetchProgress();
    }, []);

    // to cos ponizej oblicza szerokosc paska
    const percentage = Math.min((stats.completed / stats.totalGoal) * 100, 100);

    return (
        <div className={style.container}>
            <h2> Zrealizowałeś {stats.completed} z {stats.totalGoal} treningów w tym tygodniu!</h2>
            <div className={style.progress}>
                <div
                    className={style["progress-value"]}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Progress;