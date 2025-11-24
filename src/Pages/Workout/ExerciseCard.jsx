import styles from "../../Components/css/ExerciseCard.module.css";

const ExerciseCard = ({ exercise, onSelect}) => {
    return (
        <div className={styles.card} onClick={() => onSelect(exercise)}>
            <div className={styles.header}>
                <h3>{exercise.name}</h3>
                <span className={`${styles.difficulty} ${styles[`difficulty-${exercise.difficulty.toLowerCase()}`]}`}>
                    {exercise.difficulty}
                </span>
            </div>
            <p className={styles.description}>{exercise.description}</p>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.label}>Serie:</span>
                    <span className={styles.value}>{exercise.sets}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.label}>Powtórzenia:</span>
                    <span className={styles.value}>{exercise.reps}</span>
                </div>
            </div>
            <button className={styles.viewButton}>Wyświetl szczegóły</button>
        </div>
    );
};

export default ExerciseCard;
