import React from "react";

const Item = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("item_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
      onDragStart={dragStart}
      draggable={props.draggable}
    >
      {props.children}
    </div>
  );
};

export default Item;
