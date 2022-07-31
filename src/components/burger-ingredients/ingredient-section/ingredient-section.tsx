import React from "react";
import IngredientItem from "./ingredient-item/ingredient-item";
import styles from "./ingredient-section.module.css";
import { TBurgerItem } from "../../../types/burger-item";

interface IIngredientSection {
  title: string;
  items: Array<TBurgerItem>;
  sectionName: string;
}

const IngredientSection: React.FC<IIngredientSection> = ({
  title,
  items,
  sectionName,
}) => {
  return (
    <section id={sectionName} className={styles.section}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className={styles.items}>
        {items.map((item) => {
          return <IngredientItem key={item._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default IngredientSection;
