import React from 'react';
import './burger-constructor.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BurgerItemType from "../../prop-types/burger-item-type";

function BurgerConstructor(props) {
    return (
        <section className="burger-constructor mt-15" >
            <div className="burger-constructor__item ml-6">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={props.topItem.name}
                    price={props.topItem.price}
                    thumbnail={props.topItem.image_mobile}
                />
            </div>

            <ul className="burger-constructor__middle custom-scroll">
            {props.midItems.map(midItem => {
                return <li className="burger-constructor__item" key={`mid-item-${midItem._id}`}>
                    <DragIcon/>
                    <ConstructorElement
                        text={midItem.name}
                        price={midItem.price}
                        thumbnail={midItem.image_mobile}
                    />
                </li>
            }) }
            </ul>
            <div className="burger-constructor__item ml-6">
                <ConstructorElement
                type="bottom"
                isLocked={true}
                text={props.bottomItem.name}
                price={props.bottomItem.price}
                thumbnail={props.bottomItem.image_mobile}
            />
            </div>

            <div className="burger-constructor__total">
                <div className="burger-constructor__value m-10">
                    <span className="text text_type_digits-medium m-2">
                        610
                    </span>
                    <CurrencyIcon/>
                </div>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    topItem: PropTypes.shape(BurgerItemType),
    midItems: PropTypes.arrayOf(PropTypes.shape(BurgerItemType)),
    bottomItem: PropTypes.shape(BurgerItemType)
};

export default BurgerConstructor;
