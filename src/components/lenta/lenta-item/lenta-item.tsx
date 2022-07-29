import React from "react";
import { TOrder } from "../../../types/order";
import styles from "./lenta-item.module.css";
import { ingredientsSelector } from "../../../services/ingredients/selectors";
import { useSelector } from "react-redux";

interface ILenta {
  order: TOrder;
}

const LentaItem: React.FC<ILenta> = ({ order }) => {
  const showItmes = 4;
  const ingredients = useSelector(ingredientsSelector);
  const orderIngredients = order.ingredients.map((value, index, array) => {
    return ingredients.find((item) => item._id === value);
  });

  const orderIngredientsCost = orderIngredients.reduce(
    (prev, item) => prev + (item?.price || 0),
    0
  );

  return (
    <section className={styles.main} key={order._id}>
      <div className={styles.top}>
        <div className="text text_type_main-default">#{order.number}</div>
        <div>{order.createdAt}</div>
      </div>
      <div className={styles.middle}>{order.name}</div>

      <div className={styles.bottom}>
        <div>
          {orderIngredients.map((value, index) => {
            if (
              index === showItmes &&
              orderIngredients.length > showItmes + 1
            ) {
              return (
                <div
                  className={styles.img}
                  style={{
                    position: "relative",
                    left: `-${index * 20}px`,
                  }}
                >
                  <span className="text text_type_main-medium text_color_primary">
                    +{orderIngredients.length - 1 - showItmes}
                  </span>
                </div>
              );
            }

            if (index > showItmes) {
              return;
            }

            return (
              <div
                style={{
                  backgroundImage: `url(${value?.image_mobile})`,
                  position: "relative",
                  left: `-${index * 20}px`,
                  zIndex: `${10 - index}`,
                }}
                className={styles.img}
              >
                &nbsp;
              </div>
            );
          })}
        </div>

        <div>{orderIngredientsCost}</div>
      </div>
    </section>
  );
};

export default LentaItem;
