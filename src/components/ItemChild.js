import React, { useContext } from "react";
import classNames from "classnames";

import "./ItemChild.css";
import checkedImg from "../img/checked.svg";
import uncheckImg from "../img/uncheck.svg";

import { TodoContext } from "../contexts/TodoContext";

function ItemChild(props) {
  const { onItemClicked } = useContext(TodoContext);
  const { itemTitle, isComplete, category } = props.item;
  let imgSrc = uncheckImg;
  if (isComplete) imgSrc = checkedImg;
  return (
    <div className="ItemChild">
      <img src={imgSrc} alt="" onClick={() => onItemClicked(props.item)} />
      <div className="Category">{category}</div>
      <p className={classNames("", { Complete: isComplete })}>{itemTitle}</p>
    </div>
  );
}

export default ItemChild;
