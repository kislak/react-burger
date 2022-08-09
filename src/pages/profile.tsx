import React, { useEffect, useState } from "react";
import styles from "./pages.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { accessTokenSelector, userSelector } from "../services/user/selectors";
import { getUser, updateUser } from "../services/user/actions";
import ProfileNav from "../components/profile-nav/profile-nav";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameEditable, setNameEditable] = useState(false);
  const [emailEditable, setEmailEditable] = useState(false);
  const [passwordEditable, setPasswordEditable] = useState(false);
  const user = useAppSelector(userSelector);
  const token = useAppSelector(accessTokenSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    token && dispatch(getUser(token));
  }, [token, dispatch]);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatchUpdateUser();
  };

  const dispatchUpdateUser = () => {
    token && dispatch(updateUser(token, email, name));
  };

  return (
    <section className={styles.section}>
      <ProfileNav />
      <section>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.input}>
            <Input
              type="text"
              placeholder="Имя"
              value={name}
              icon={nameEditable ? "CheckMarkIcon" : "EditIcon"}
              onIconClick={() => {
                setNameEditable(!nameEditable);
                dispatchUpdateUser();
              }}
              disabled={!nameEditable}
              onChange={(e) => setName(e.target.value)}
              size="small"
            />
          </div>

          <div className={styles.input}>
            <Input
              type="text"
              placeholder="Логин"
              value={email}
              icon={emailEditable ? "CheckMarkIcon" : "EditIcon"}
              onIconClick={() => {
                setEmailEditable(!emailEditable);
                dispatchUpdateUser();
              }}
              disabled={!emailEditable}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
            />
          </div>

          <div className={styles.input}>
            <Input
              type={passwordEditable ? "text" : "password"}
              placeholder="Пароль"
              icon={passwordEditable ? "CheckMarkIcon" : "CheckMarkIcon"}
              onIconClick={() => {
                setPasswordEditable(false);
                // dispatchUpdateUser();
              }}
              value={password}
              disabled={!passwordEditable}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Profile;
