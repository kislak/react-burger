import styles from "./burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteMiddleItem} from "../../../services/burger-constructor/actions";
import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";

function BurgerConstructorItem({midItem, index}) {
  const dispatch = useDispatch()

  const [{isSortDragging},dragSortRef] = useDrag({
    type: "sortIngredient",
    collect: monitor => ({
      isSortDragging: !!monitor.isDragging()
    })
  });

  const [{isHover}, dropSortRef] = useDrop({
    accept: "sortIngredient",
    drop(item) {
      console.log('ok')
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  return (
    <>
      {
        <div className="mt-7" ref={dropSortRef} style={{backgroundColor: "#FF0000"}}>
        </div>
      }

      <li className={styles.item}  ref={dragSortRef}>
      {!isSortDragging && (
        <>
          <DragIcon/>
          <ConstructorElement
            text={midItem.name}
            price={midItem.price}
            thumbnail={midItem.image_mobile}
            handleClose={() => {
              dispatch(deleteMiddleItem(index))
            }}
          />
          <div className="m-2"></div>
        </>
      )}
    </li>
    </>
  )
}

export default BurgerConstructorItem;