import React, { useState, useEffect } from 'react';
import styles from "../../Components/css/ExerciseModal.module.css";

const ExerciseModal = ({ exercise, onClose}) => {
    // zmienne dla stopreka
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // czyszczenie info oraz powrot do strony
    useEffect(() => {
        if (!exercise) {
            setIsTimerRunning(false);
            setTimeLeft(60);
        }
    }, [exercise]);

    useEffect(() => {
        let interval = null;

        // sprawdza czy stoper jest lwaczony i odejmuje 1s
        if (isTimerRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            // po prostu zatrzymanie
            setIsTimerRunning(false);
            clearInterval(interval);
        }

        // sprzatacz po funkcji
        return () => clearInterval(interval);
    }, [isTimerRunning, timeLeft]);

    const handleStartTimer = () => {
        setTimeLeft(60); // ustawia 60s
        setIsTimerRunning(true);
    };

    const handleClose = () => {
        setIsTimerRunning(false); // wylacza stoper
        setTimeLeft(60);
        onClose();
    };

    if (!exercise) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleClose}>✕</button>

                <h1>{exercise.name}</h1>

                <div className={styles.difficulty}>
                    <span className={`${styles.badge} ${styles[`difficulty-${exercise.difficulty.toLowerCase()}`]}`}>
                        {exercise.difficulty}
                    </span>
                </div>

                <div className={styles.description}>
                    <p>{exercise.description}</p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Serie</span>
                        <span className={styles.statValue}>{exercise.sets}</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Powtórzenia</span>
                        <span className={styles.statValue}>{exercise.reps}</span>
                    </div>
                </div>

                <div className={styles.instructionSection}>
                    <h2>Instrukcja wykonania</h2>
                    <ol className={styles.instructions}>
                        {exercise.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>

                <div className={styles.tipsSection}>
                    <h3>💡 Wskazówka</h3>
                    <p>{exercise.tips}</p>
                </div>

                {/* wyswietlanie czasu - jestli dziala stoper to zmienia cyferki itd. */}
                {isTimerRunning ? (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff4444' }}>
                            Pozostały czas: {timeLeft} s
                        </h2>
                    </div>
                ) : (
                    <button className={styles.startButton} onClick={handleStartTimer}>
                        Rozpocznij trening
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExerciseModal;