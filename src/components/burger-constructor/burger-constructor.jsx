import React from 'react';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerItemType from "../../prop-types/burger-item-type";
import styles from './burger-constructor.module.css';

function BurgerConstructor({topItem, midItems, setOrderDetailsOpen}) {
    return (
        <section className={`${styles.constructor} mt-15`} >
            <div className={`${styles.constructor} ml-6`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${topItem.name}(верх)`}
                    price={topItem.price}
                    thumbnail={topItem.image_mobile}
                />
            </div>

            <ul className={`${styles.middle} custom-scroll`}>
            {midItems.map(midItem => {
                return <li className={styles.item} key={`mid-item-${midItem._id}`}>
                    <DragIcon/>
                    <ConstructorElement
                        text={midItem.name}
                        price={midItem.price}
                        thumbnail={midItem.image_mobile}
                    />
                </li>
            }) }
            </ul>
            <div className={`${styles.item} ml-6`}>
                <ConstructorElement
                type="bottom"
                isLocked={true}
                text={topItem.name}
                  text={`${topItem.name}(низ)`}

              price={topItem.price}
                thumbnail={topItem.image_mobile}
            />
            </div>

            <div className={styles.total}>
                <div className="m-10">
                    <span className="text text_type_digits-medium m-2">
                        610
                    </span>
                    <CurrencyIcon/>
                </div>
                <Button type="primary" size="medium" onClick={() => { setOrderDetailsOpen(true) }}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    topItem: PropTypes.shape(BurgerItemType),
    midItems: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)),
    setOrderDetailsOpen: PropTypes.func.isRequired
};

export default BurgerConstructor;
