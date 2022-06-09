import styles from "./burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteMiddleItem} from "../../../services/burger-constructor/actions";
import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";

function BurgerConstructorItem({midItem, index}) {
  const dispatch = useDispatch()

  const [{ isDragging }, dragSortRef, dragSortPreviewRef] = useDrag(() => ({
    type: 'sortIngredient',
    item: {index: index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [])

  const [{isHover}, dropSortRef] = useDrop({
    accept: "sortIngredient",
    drop(item) {
      if (item.index + 1 === index) { return}



      console.log('index')
      console.log(item)
      console.log("before")
      console.log(index)
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  return (
    <>
        {!isDragging && (
          <li
            className={styles.item}
            ref={dropSortRef}
            style={{borderTop: isHover ? '3px solid rgba(255, 255, 200, 0.8)' : '3px solid rgba(255, 255, 255, 0)'}}
          >
            <div
              className={styles.item}
              ref={dragSortRef}
              style={{ visibility: isDragging ? 'hidden' : 'inherit'}}
            >
              <DragIcon/>
              <ConstructorElement
                text={midItem.name}
                price={midItem.price}
                thumbnail={midItem.image_mobile}
                handleClose={() => {
                  dispatch(deleteMiddleItem(index))
                }}
              />

            </div>

          </li>
        )}
    </>
  )
}

export default BurgerConstructorItem;