import styles from "../../Components/css/CategorySelector.module.css";
import { workoutCategories } from "./workoutData";

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className={styles.container}>
            <h2>Wybierz rodzaj treningu</h2>
            <div className={styles.categories}>
                {workoutCategories.map(category => (
                    <button
                        key={category.id}
                        className={`${styles.categoryCard} ${selectedCategory?.id === category.id ? styles.active : ""}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        <span className={styles.icon}>{category.icon}</span>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
