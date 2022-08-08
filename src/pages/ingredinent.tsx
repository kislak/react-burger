import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import styles from "./pages.module.css";
import React, { useEffect } from "react";
import { getIngredients } from "../services/ingredients/actions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setCurrentIngredient } from "../services/current-ingredient/actions";
import { useParams } from "react-router-dom";
import { ingredientsSelector } from "../services/ingredients/selectors";
import { TBurgerItem } from "../types/burger-item";

const Ingredient: React.FC = () => {
  const dispatch = useAppDispatch();
  const items: Array<TBurgerItem> = useAppSelector(ingredientsSelector);
  const { id } = useParams() as {
    id: string;
  };
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    const item = items.find((x) => x._id === id);
    if (item) {
      dispatch(setCurrentIngredient(item, () => {}));
    }
  }, [items, dispatch, id]);

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <h1>Детали ингредиента</h1>
        <IngredientDetails />
      </div>
    </section>
  );
};

export default Ingredient;
