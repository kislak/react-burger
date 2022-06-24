import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import styles from "./pages.module.css";
import { useEffect } from "react";
import { getIngredients } from "../../services/ingredients/actions";
import { useDispatch, useSelector } from "react-redux";
import { allItemsSelector } from "../../services/burger-constructor/selectors";
import { setCurrentIngredient } from "../../services/current-ingredient/actions";
import { useParams } from "react-router-dom";
import { ingredientsSelector } from "../../services/ingredients/selectors";

function Ingredient() {
  const dispatch = useDispatch();
  const items = useSelector(ingredientsSelector);
  const params = useParams();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    const item = items.find((x) => x._id === params.id);
    dispatch(setCurrentIngredient(item, () => {}));
  }, [items]);

  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  );
}

export default Ingredient;
