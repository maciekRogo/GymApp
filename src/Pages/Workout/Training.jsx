import React, { useState, useEffect } from 'react';
import Nav from "../../Components/Nav.jsx"
import CategorySelector from "./CategorySelector";
import ExerciseList from "./ExerciseList";
import ExerciseModal from "./ExerciseModal";
import styles from "../../Components/css/Workout.module.css";
import { exercises } from "./workoutData";

const Workout = () => {
    const [theme, setTheme] = useState("Ciemny");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const currentExercises = selectedCategory ? exercises[selectedCategory.id] : [];

    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Plan Treningowy</h1>
                    <p>Wybierz kategorię i ćwiczenie aby rozpocząć trening</p>
                </div>

                <CategorySelector
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <ExerciseList
                    exercises={currentExercises}
                    selectedCategory={selectedCategory}
                    onSelectExercise={setSelectedExercise}
                    theme={theme}
                />

                <ExerciseModal
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                    theme={theme}
                />
            </div>
        </div>
    );
};

export default Workout;
