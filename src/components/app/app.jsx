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
    const [currentIngredient, setCurrentIngredient] = useState(null)
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
                    <BurgerIngredients
                        items={data}
                        setCurrentIngredient={setCurrentIngredient}
                    />
                    <BurgerConstructor
                        topItem={data[0]}
                        midItems={data.filter(i => i.type !== "bun")}
                        setOrderDetailsOpen={setOrderDetailsOpen}
                    />
                </>
            }

          <InPortal id="ingredient-details-root">
              <IngredientDetails
                    currentIngredient={currentIngredient}
                    setClose={() => setCurrentIngredient(null)}
                >
                </IngredientDetails>
            </InPortal>

            <InPortal id="order-details-root">
                <OrderDetails
                    isOpen={isOrderDetailsOpen}
                    setClose={() => setOrderDetailsOpen(false)}
                >
                </OrderDetails>
            </InPortal>
        </div>
    );
}

export default App;
