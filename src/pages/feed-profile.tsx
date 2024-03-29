import React, { useEffect } from "react";
import { wsConnect, wsClose } from "../services/profile-orders/actions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { profileOrdersSelector } from "../services/profile-orders/selectors";
import { accessTokenSelector } from "../services/user/selectors";
import styles from "./pages.module.css";
import ProfileNav from "../components/profile-nav/profile-nav";
import Lenta from "../components/lenta/lenta";
import Modal from "../components/modal/modal/modal";
import { openOrderDetails } from "../services/order/actions";
import OrderDetails from "../components/modal/order-details/order-details";
import { orderDetailsOpenSelector } from "../services/order/selectors";
import { useHistory, useParams } from "react-router-dom";

const FeedProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(accessTokenSelector);
  const orders = useAppSelector(profileOrdersSelector);
  const isOrderDetailsOpen = useAppSelector(orderDetailsOpenSelector);
  const history = useHistory();

  const { id } = useParams() as {
    id: string;
  };

  useEffect(() => {
    if (token) {
      const t = token.replace("Bearer ", "");
      dispatch(wsConnect(`?token=${t}`));
    }
    return () => {
      dispatch(wsClose);
    };
  }, [dispatch, token]);

  useEffect(() => {
    id && dispatch(openOrderDetails(Number(id), () => {}));
  }, [dispatch, id]);

  const modalCloseHandler = () => {
    dispatch(
      openOrderDetails(null, () => {
        history.push("/profile/orders");
      })
    );
  };

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
