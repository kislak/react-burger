import React from "react";
import { TOrder } from "../../../types/order";
import styles from "./lenta-item.module.css";
import { ingredientsSelector } from "../../../services/ingredients/selectors";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  submitOrderAction,
  openOrderDetails,
} from "../../../services/order/actions";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface ILenta {
  order: TOrder;
  showStatus: boolean;
}

export const STATUS_MAP = {
  pending: "Готовится",
  done: "Выполнен",
  created: "Создан",
};

export const formatDate = (date: Date) => {
  return date.toLocaleString("ru-RU", {
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
};

const LentaItem: React.FC<ILenta> = ({ order, showStatus }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const showItems = 4;
  const ingredients = useAppSelector(ingredientsSelector);
  const orderIngredients = order.ingredients.map((value, index, array) => {
    return ingredients.find((item) => item._id === value);
  });

  const orderIngredientsCost = orderIngredients.reduce(
    (prev, item) => prev + (item?.price || 0),
    0
  );

  const clickHandler = () => {
    dispatch(submitOrderAction(order.number));
    dispatch(
      openOrderDetails(order.number, () => {
        history.push({
          pathname: `${showStatus ? "/profile/orders" : "/feed"}/${
            order.number
          }`,
          state: "modal",
        });
      })
    );
  };

  return (
    <section className={styles.main} key={order._id} onClick={clickHandler}>
      <div className={styles.top}>
        <div className="text text_type_digits-default">#{order.number}</div>
        <div className="text input__textfield-disabled">
          {formatDate(new Date(order.createdAt))}
        </div>
      </div>

      <div className="text text_type_main-medium mt-3 mb-3">{order.name}</div>

      {showStatus && (
        <div className={`${styles[order.status]} text text_type_main-small`}>
          {STATUS_MAP[order.status]}
        </div>
      )}

      <div className={styles.bottom}>
        <div>
          {orderIngredients.map((value, index) => {
            if (
              index === showItems &&
              orderIngredients.length > showItems + 1
            ) {
              return (
                <div
                  className={styles.img}
                  style={{
                    position: "relative",
                    left: `-${index * 30}px`,
                  }}
                  key={uuidv4()}
                >
                  <span className="text text_type_main-medium text_color_primary">
                    +{orderIngredients.length - 1 - showItems}
                  </span>
                </div>
              );
            }

            if (index > showItems) {
              return "";
            }

            return (
              <div
                style={{
                  backgroundImage: `url(${value?.image_mobile})`,
                  position: "relative",
                  left: `-${index * 30}px`,
                  zIndex: `${10 - index}`,
                }}
                className={styles.img}
                key={uuidv4()}
              >
                &nbsp;
              </div>
            );
          })}
        </div>

        <div>
          <span className="text text_type_digits-medium m-2">
            {orderIngredientsCost}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default LentaItem;
