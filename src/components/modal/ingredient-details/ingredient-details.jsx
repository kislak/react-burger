import Modal from "../modal/modal";
import styles from './ingredient-details.module.css';

function IngredientDetails({currentIngredient, setClose}) {
    return (
        <Modal isOpen={currentIngredient} setClose={setClose} title="Детали ингредиента">
             {
                currentIngredient &&
                 <section className={styles.details}>
                     <img src={currentIngredient.image_large} className="mt-8" />
                     <p className="mt-4 text text_type_main-medium">
                         {currentIngredient.name}
                     </p>

                     <table border="0" cellSpacing="20" cellPadding="0" className="text text_color_inactive mt-8">
                         <tr className="text_type_main-small">
                             <td>Калории,ккал</td>
                             <td>Белки, г</td>
                             <td>Жиры, г</td>
                             <td>Углеводы, г</td>
                         </tr>
                         <tr className="text text_type_digits-default" >
                             <td >{currentIngredient.calories}</td>
                             <td>{currentIngredient.proteins}</td>
                             <td>{currentIngredient.fat}</td>
                             <td>{currentIngredient.carbohydrates}</td>
                         </tr>
                     </table>

                    <div>{
                        console.log(currentIngredient) &&
                        currentIngredient.name
                    }</div>
                 </section>
             }
        </Modal>
    )
}

export default IngredientDetails;
