import React, { useEffect, useState } from "react";
import classNames from "classnames";

import ItemChild from "./ItemChild";
import "./TodoItem.css";

function TodoItem(props) {
  //hook state
  const [isCollapsed, toggleCollapsed] = useState(false);
  const handleCollapsed = () => toggleCollapsed(!isCollapsed);

  useEffect(() => {
    if (props.item.progress === props.item.listTodo.length)
      toggleCollapsed(!isCollapsed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { item } = props;
  return (
    <div className="ItemContainer">
      <div
        className={classNames("Title", {
          "Title-close": isCollapsed,
        })}
      >
        {/* progress circle bar */}
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
          <circle
            cx="9"
            cy="9.5"
            r="8.5"
            stroke="white"
            stroke-opacity="0.25"
          />
          <path
            d="M9.00006 2.50002C10.5409 2.50002 12.0388 3.00844 13.2612 3.94643C14.4837 4.88442 15.3626 6.19958 15.7614 7.68793C16.1603 9.17628 16.057 10.7547 15.4674 12.1783C14.8779 13.6019 13.8351 14.7912 12.5007 15.5618C11.1663 16.3324 9.615 16.6412 8.08728 16.4402C6.55956 16.2393 5.14082 15.5399 4.05109 14.4505C2.96135 13.3611 2.26152 11.9426 2.06011 10.415C1.85871 8.88731 2.16699 7.33588 2.93715 6.00128L9.00006 9.50001V2.50002Z"
            fill="white"
            fill-opacity="0.2"
          />
        </svg>
        <h4>{item.title}</h4>
        <div className="progress-num">
          {item.progress}/{item.listTodo.length}
        </div>
        {/* Expand icon */}
        <svg
          width="19"
          height="11"
          viewBox="0 0 19 11"
          fill="none"
          onClick={handleCollapsed}
          className={classNames("expand transform", {
            collapsed: isCollapsed,
          })}
        >
          <path
            d="M2.24833 0.868744L9.5 6.59374L16.7675 0.868744L19 2.63124L9.5 10.1312L0 2.63124L2.24833 0.868744Z"
            fill="#616161"
          />
        </svg>
      </div>

      <div
        className={classNames("ListContent transform", {
          CloseContent: isCollapsed,
        })}
      >
        <progress max={item.listTodo.length} value={item.progress}></progress>
        {item.listTodo.map((item, index) => (
          <ItemChild item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TodoItem;
