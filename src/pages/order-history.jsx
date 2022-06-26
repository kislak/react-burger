import { Link } from "react-router-dom";
import styles from "./pages.module.css";

function OrderHistory() {
  return (
    <section className={styles.section}>
      <Link
        to="/profile/orders/1"
        className={`${styles.profile__link_active} text text_type_main-medium`}
      >
        Заказ 1
      </Link>
      <Link
        to="/profile/orders/2"
        className={`${styles.profile__link_active} text text_type_main-medium`}
      >
        Заказ 2
      </Link>
    </section>
  );
}

export default OrderHistory;
