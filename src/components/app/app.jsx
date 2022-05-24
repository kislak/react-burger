import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

// import data from "../../utils/data"
import api from "../../utils/api"
import Modal from "../modal/modal";

function App() {
  const [data, setData] = useState(null);

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

          <Modal isOpen={true}>
             <div>content</div>
          </Modal>

          {data &&
              <>
                  <BurgerIngredients items={data}/>
                  <BurgerConstructor topItem={data[0]} midItems={data.slice(1, -1)} />
              </>
          }
      </div>
  );
}

export default App;
