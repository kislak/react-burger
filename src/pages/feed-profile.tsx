import React, { useEffect } from "react";
import { wsConnect } from "../services/profile-orders/actions";
import { useDispatch, useSelector } from "react-redux";
import { profileOrdersSelector } from "../services/profile-orders/selectors";
import { accessTokenSelector } from "../services/user/selectors";

const FeedProfile: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessTokenSelector);
  const orders = useSelector(profileOrdersSelector);

  useEffect(() => {
    if (token) {
      let t = token.replace("Bearer ", "");
      dispatch(wsConnect(`?token=${t}`));
    }
  }, [dispatch, token]);

  return (
    <section>
      {orders.map((order) => {
        return (
          <section key={order._id}>
            #{order._id} - {order.name}
          </section>
        );
      })}
    </section>
  );
};

export default FeedProfile;
