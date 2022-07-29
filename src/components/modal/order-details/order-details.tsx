import styles from "./order-details.module.css";
import check from "../../../images/check.svg";
import loader from "../../../images/loader.gif";

import React from "react";
import { useSelector } from "react-redux";
import {
  orderNumberSelector,
  showLoader,
} from "../../../services/order/selectors";
import { ordersSelector } from "../../../services/all-orders/selectors";
import { profileOrdersSelector } from "../../../services/profile-orders/selectors";
import { STATUS_MAP, formatDate } from "../../lenta/lenta-item/lenta-item";
import lentaStyle from "../../lenta/lenta-item/lenta-item.module.css";
import { ingredientsSelector } from "../../../services/ingredients/selectors";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails: React.FC = () => {
  const orderNumber = useSelector(orderNumberSelector);
  const loading = useSelector(showLoader);
  const orders = useSelector(ordersSelector);
  const profileOrders = useSelector(profileOrdersSelector);
  const ingredients = useSelector(ingredientsSelector);

  let order = orders.find((i) => i.number === orderNumber);
  if (!order) {
    order = profileOrders.find((i) => i.number === orderNumber);
  }
  const orderIngredients =
    order &&
    order.ingredients.map((value, index, array) => {
      return ingredients.find((item) => item._id === value);
    });

  const orderIngredientsCost =
    orderIngredients &&
    orderIngredients.reduce((prev, item) => prev + (item?.price || 0), 0);

  return (
    <section className={styles.content}>
      {loading && <img src={loader} alt="loader" />}
      {!loading && !order && (
        <>
          <h2 className="text text_type_digits-large mt-8">{orderNumber}</h2>
          <p className="text text_type_main-medium mt-8">
            Идентификатор заказа
          </p>
          <div className="mt-15">
            <img src={check} alt="check" />
          </div>
          <p className="text text_type_main-default mt-15">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mt-2 mb-20">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}

      {!loading && order && orderIngredients && (
        <div className={styles.details}>
          <div className="text text_type_main-default text_type_digits-default">
            #{order.number}
          </div>
          <div className="text text_type_main-medium mt-5">{order.name}</div>
          <div
            className={`${
              lentaStyle[order.status]
            } text text_type_main-default  mt-3`}
          >
            {STATUS_MAP[order.status]}
          </div>
          <div className="text text_type_main-medium mt-5 mb-5">Состав:</div>
          <div className={`${styles.list} custom-scroll`}>
            {orderIngredients.map((value, index) => {
              return (
                <div className={styles.listItem}>
                  <div className={styles.itemLeft}>
                    <div
                      style={{ backgroundImage: `url(${value?.image_mobile})` }}
                      className={lentaStyle.img}
                    ></div>
                    <div
                      className={`${styles.name} text text_type_main-default ml-3`}
                    >
                      {value?.name}
                    </div>
                  </div>
                  <div className={styles.itemRight}>
                    <span className="mr-2 text_type_digits-default">
                      {" "}
                      1 x {value?.price}{" "}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.bottom}>
            <div className="text text_color_inactive">
              {formatDate(new Date(order.createdAt))}
            </div>
            <div>
              <span className="text text_type_digits-medium m-2">
                {orderIngredientsCost}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;
