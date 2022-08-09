import styles from "./ingredient-details.module.css";
import { useAppSelector } from "../../../hooks/hooks";
import { currentIngredientSelector } from "../../../services/current-ingredient/selectors";
import React from "react";

const IngredientDetails: React.FC = () => {
  const currentIngredient = useAppSelector(currentIngredientSelector);
  return (
    currentIngredient && (
      <section className={styles.details}>
        <img
          src={currentIngredient.image_large}
          className="mt-8"
          alt="ingredient"
        />
        <p className="mt-4 text text_type_main-medium">
          {currentIngredient.name}
        </p>

        <table
          cellSpacing="20"
          cellPadding="0"
          className="text text_color_inactive mt-8"
        >
          <thead>
            <tr className="text_type_main-small">
              <td>Калории,ккал</td>
              <td>Белки, г</td>
              <td>Жиры, г</td>
              <td>Углеводы, г</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text text_type_digits-default">
              <td>{currentIngredient.calories}</td>
              <td>{currentIngredient.proteins}</td>
              <td>{currentIngredient.fat}</td>
              <td>{currentIngredient.carbohydrates}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  );
};

export default IngredientDetails;
