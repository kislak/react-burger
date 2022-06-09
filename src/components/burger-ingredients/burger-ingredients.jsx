import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "./ingredient-section/ingredient-section";
import styles from "./burger-ingredients.module.css";
import {useSelector} from "react-redux";
import {
  ingredientsBun,
  ingredientsMain,
  ingredientsSauce,
} from "../../services/ingredients/selectors";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("bun");
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const clickHandler = (value) => {
    setCurrent(value);
    value === "bun" && bunRef.current.scrollIntoView({ behavior: "smooth" });
    value === "sauce" && sauceRef.current.scrollIntoView({ behavior: "smooth" });
    value === "main" && mainRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollHandler = (e) => {
    const bunRefRec = bunRef.current.getBoundingClientRect();
    const sauceRefRec = sauceRef.current.getBoundingClientRect();
    // const mainRefRec = mainRef.current.getBoundingClientRect();

    if (bunRefRec.height - 400 + bunRefRec.top > 0 ) {
      setCurrent('bun');
      return;
    }
    if (sauceRefRec.height - 400  + sauceRefRec.top > 0) {
      setCurrent('sauce');
      return;
    }
    setCurrent('main');
  }

  const bun = useSelector(ingredientsBun)
  const sauce = useSelector(ingredientsSauce)
  const main = useSelector(ingredientsMain)

  return (
    <section className={styles.ingredients} >
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <section className={styles.nav} >
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

      <div className={`${styles.sections} custom-scroll`} onScroll={scrollHandler}>
        <span ref={bunRef} >
          <IngredientSection
            title="Булки"
            items={bun}
            sectionName="bun"
          />
        </span>

        <span ref={sauceRef} >
        <IngredientSection
          title="Соусы"
          items={sauce}
          sectionName="sauce"
        />
          </span>
        <span ref={mainRef} >
        <IngredientSection
          title="Начинки"
          items={main}
          sectionName="main"
        />
          </span>
      </div>
    </section>
  );
}

export default BurgerIngredients;
