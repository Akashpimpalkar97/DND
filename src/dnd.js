import React from "react";

const dnd = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const item_id = e.dataTransfer.getData("item_id");
    const item = document.getElementById(item_id);
    item.style.display = "block";
    e.target.appendChild(item);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default dnd;
