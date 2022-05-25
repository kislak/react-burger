import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/order-details";
import InPortal from "../inPortal/in-portal"
import api from "../../utils/api"

function App() {
    const [data, setData] = useState(null);
    const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false);
    const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);

    useEffect(() => {
        api.getIngredients().then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <div className={ styles.app }>
            <AppHeader />
            {data &&
                <>
                    <BurgerIngredients items={data} />
                    <BurgerConstructor
                        topItem={data[0]}
                        midItems={data.slice(1, -1)}
                        setOrderDetailsOpen={setOrderDetailsOpen}
                    />
                </>
            }

            <InPortal id="ingredient-details-root">
                <IngredientDetails
                    isOpen={isIngredientDetailsOpen}
                    setClose={() => setIngredientDetailsOpen(false)}
                >
                    <div>Ingredient Details</div>
                </IngredientDetails>
            </InPortal>

            <InPortal id="order-details-root">
                <OrderDetails
                    isOpen={isOrderDetailsOpen}
                    setClose={() => setOrderDetailsOpen(false)}
                >
                    <div>Order Details</div>
                </OrderDetails>
            </InPortal>
        </div>
    );
}

export default App;
