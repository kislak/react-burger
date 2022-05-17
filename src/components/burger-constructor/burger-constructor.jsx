import React from 'react';
import './burger-constructor.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data"

let top_item = data[0]
let mid_items = data.slice(1, -1)
let bottom_item = data[data.length - 1]

function BurgerConstructor() {
    return (
        <section className="burger-constructor mt-15" >
            <div className="burger-constructor__item ml-6">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={top_item.name}
                    price={top_item.price}
                    thumbnail={top_item.image_mobile}
                />
            </div>

            <ul className="burger-constructor__middle custom-scroll">
            {mid_items.map(mid_item => {
                return <li className="burger-constructor__item">
                    <DragIcon/>
                    <ConstructorElement
                        text={mid_item.name}
                        price={mid_item.price}
                        thumbnail={mid_item.image_mobile}
                    />
                </li>
            }) }
            </ul>
            <div className="burger-constructor__item ml-6">
                <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bottom_item.name}
                price={bottom_item.price}
                thumbnail={bottom_item.image_mobile}
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

export default BurgerConstructor;
