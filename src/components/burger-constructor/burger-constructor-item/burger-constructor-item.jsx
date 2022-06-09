import styles from "./burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteMiddleItem, insertBefore, insertAfter} from "../../../services/burger-constructor/actions";
import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import mergeRefs from "react-merge-refs";

function BurgerConstructorItem({midItem, index}) {
  const dispatch = useDispatch()

  const [{ isDragging }, dragSortRef] = useDrag(() => ({
    type: 'sortIngredient',
    item: {midItem: midItem, index: index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [])

  const [{isHoverTop, isHoverBottom}, dropSortRef] = useDrop({
    accept: "sortIngredient",
    drop(item, monitor) {
      if (monitor.getDifferenceFromInitialOffset().y < 0) {
        dispatch(insertBefore(item.midItem, item.index, index))
      } else {
        dispatch(insertAfter(item.midItem, item.index, index))
      }

    },
    collect: monitor => ({
      isHoverTop: monitor.isOver() && monitor.getDifferenceFromInitialOffset().y < 0,
      isHoverBottom: monitor.isOver() && monitor.getDifferenceFromInitialOffset().y > 0,
    })
  });

  return (
    <>
      {!isDragging && (
        <li
          className={styles.item}
          ref={mergeRefs([dragSortRef, dropSortRef])}
          style={{
            borderTop: isHoverTop ? '3px solid rgba(255, 255, 200, 0.8)' : '3px solid rgba(255, 255, 255, 0)',
            borderBottom: isHoverBottom ? '3px solid rgba(255, 255, 200, 0.8)' : '3px solid rgba(255, 255, 255, 0)',
            visibility: isDragging ? 'hidden' : 'inherit'
          }}
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
        </li>
      )}
    </>
  )
}

export default BurgerConstructorItem;