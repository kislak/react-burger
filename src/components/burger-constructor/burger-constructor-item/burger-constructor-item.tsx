import styles from "./burger-constructor-item.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  deleteMiddleItem,
  insertBefore,
  insertAfter,
} from "../../../services/burger-constructor/actions";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import mergeRefs from "react-merge-refs";
import { TBurgerItem } from "../../../types/burger-item";

interface IBurgerConstructorItem {
  midItem: TBurgerItem;
  index: number;
}
const BurgerConstructorItem: React.FC<IBurgerConstructorItem> = ({
  midItem,
  index,
}) => {
  const dispatch = useDispatch();

  const [{ isDragging }, dragSortRef] = useDrag(
    () => ({
      type: "sortIngredient",
      item: { midItem: midItem },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const [{ isHoverTop, isHoverBottom }, dropSortRef] = useDrop({
    accept: "sortIngredient",
    drop(item: { midItem: TBurgerItem }, monitor) {
      if (monitor.getDifferenceFromInitialOffset()!.y < 0) {
        dispatch(insertBefore(item.midItem.uuid, midItem.uuid));
      } else {
        dispatch(insertAfter(item.midItem.uuid, midItem.uuid));
      }
    },
    collect: (monitor) => ({
      isHoverTop:
        monitor.isOver() && monitor.getDifferenceFromInitialOffset()!.y < 0,
      isHoverBottom:
        monitor.isOver() && monitor.getDifferenceFromInitialOffset()!.y > 0,
    }),
  });

  return (
    <li
      className={styles.item}
      ref={mergeRefs([dragSortRef, dropSortRef])}
      style={{
        borderTop: isHoverTop
          ? "20px dotted rgba(128, 26, 179)"
          : "20px rgba(128, 26, 179, 0)",
        borderBottom: isHoverBottom
          ? "20px dashed rgba(128, 26, 179)"
          : "20px rgba(128, 26, 179, 0)",
        visibility: isDragging ? "hidden" : "inherit",
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={midItem.name}
        price={midItem.price}
        thumbnail={midItem.image_mobile}
        handleClose={() => {
          dispatch(deleteMiddleItem(index));
        }}
      />
    </li>
  );
};

export default BurgerConstructorItem;
