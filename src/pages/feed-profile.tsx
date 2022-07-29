import React, { useEffect } from "react";
import { wsConnect } from "../services/profile-orders/actions";
import { useDispatch, useSelector } from "react-redux";
import { profileOrdersSelector } from "../services/profile-orders/selectors";
import { accessTokenSelector } from "../services/user/selectors";
import styles from "./pages.module.css";
import ProfileNav from "../components/profile-nav/profile-nav";
import Lenta from "../components/lenta/lenta";
import Modal from "../components/modal/modal/modal";
import {openOrderDetails} from "../services/order/actions";
import OrderDetails from "../components/modal/order-details/order-details";
import { orderDetailsOpenSelector } from "../services/order/selectors";
import {useHistory} from "react-router-dom";

const FeedProfile: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessTokenSelector);
  const orders = useSelector(profileOrdersSelector);
  const isOrderDetailsOpen = useSelector(orderDetailsOpenSelector);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      let t = token.replace("Bearer ", "");
      dispatch(wsConnect(`?token=${t}`));
    }
  }, [dispatch, token]);

    const modalCloseHandler = () => {
        dispatch(openOrderDetails(false, () => {
            history.push("/profile/orders");
        }))
    }

    return (
    <section className={styles.section}>
      <ProfileNav />
      <Lenta orders={orders} showStatus={true}></Lenta>
      <Modal
        id="modal"
        isOpen={isOrderDetailsOpen}
        setClose={modalCloseHandler}
      >
        <OrderDetails />
      </Modal>
    </section>
  );
};

export default FeedProfile;
