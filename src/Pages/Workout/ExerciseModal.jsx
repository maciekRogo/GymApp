import styles from "../../Components/css/ExerciseModal.module.css";

const ExerciseModal = ({ exercise, onClose}) => {
    if (!exercise) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>✕</button>

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

                <button className={styles.startButton}>Rozpocznij trening</button>
            </div>
        </div>
    );
};

export default ExerciseModal;
