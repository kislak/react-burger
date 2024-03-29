import React, { UIEvent } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import styles from "./burger-ingredients.module.css";
import { useAppSelector } from "../../hooks/hooks";
import {
  ingredientsBun,
  ingredientsMain,
  ingredientsSauce,
} from "../../services/ingredients/selectors";

const BurgerIngredients: React.FC = () => {
  const [current, setCurrent] = React.useState("bun");
  const bunRef = React.useRef<HTMLDivElement>(null);
  const sauceRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  const clickHandler = (value: string) => {
    setCurrent(value);
    value === "bun" &&
      bunRef.current &&
      bunRef.current.scrollIntoView({ behavior: "smooth" });
    value === "sauce" &&
      sauceRef.current &&
      sauceRef.current.scrollIntoView({ behavior: "smooth" });
    value === "main" &&
      mainRef.current &&
      mainRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    if (bunRef.current) {
      const bunRefRec = bunRef.current.getBoundingClientRect();
      if (bunRefRec.height - 400 + bunRefRec.top > 0) {
        setCurrent("bun");
        return;
      }
    }

    if (sauceRef.current) {
      const sauceRefRec = sauceRef.current.getBoundingClientRect();
      if (sauceRefRec.height - 400 + sauceRefRec.top > 0) {
        setCurrent("sauce");
        return;
      }
    }

    setCurrent("main");
  };

  const bun = useAppSelector(ingredientsBun);
  const sauce = useAppSelector(ingredientsSauce);
  const main = useAppSelector(ingredientsMain);

  return (
    <section className={styles.ingredients}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <section className={styles.nav}>
        <Tab value="bun" active={current === "bun"} onClick={clickHandler}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={clickHandler}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={clickHandler}>
          Начинки
        </Tab>
      </section>

      <div
        className={`${styles.sections} custom-scroll`}
        onScroll={scrollHandler}
      >
        <span ref={bunRef}>
          <IngredientSection title="Булки" items={bun} sectionName="bun" />
        </span>

        <span ref={sauceRef}>
          <IngredientSection title="Соусы" items={sauce} sectionName="sauce" />
        </span>
        <span ref={mainRef}>
          <IngredientSection title="Начинки" items={main} sectionName="main" />
        </span>
      </div>
    </section>
  );
};

export default BurgerIngredients;
