import styles from "../../Components/css/ExerciseList.module.css";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ exercises, selectedCategory, onSelectExercise, theme }) => {
    if (!selectedCategory) {
        return (
            <div className={styles.emptyState}>
                <p>Wybierz kategorię treningu aby zobaczyć dostępne ćwiczenia</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2>Ćwiczenia: {selectedCategory.name} {selectedCategory.icon}</h2>
            <div className={styles.exerciseGrid}>
                {exercises.map(exercise => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        onSelect={onSelectExercise}
                        theme={theme}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExerciseList;
