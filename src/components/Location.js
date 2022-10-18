import React, { useState } from "react";

function DelBtn(props) {
  return (
    <div
      className="delete--btn"
      onClick={() => {
        const newData = [...props.context];
        newData.splice(props.index, 1);
        props.setContext(newData);
      }}
    >
      DEL
    </div>
  );
}
function LocationsBtn(props) {
  const variant = {
    left: {
      left: 0,
      top: "calc(50% - 15px)",
      backgroundColor: "yellow",
      color: "black",
    },
    right: {
      right: 0,
      top: "calc(50% - 15px)",
      backgroundColor: "yellow",
      color: "black",
    },
    top: {
      top: 0,
      left: "calc(50% - 15px)",
      backgroundColor: "orange",
      color: "white",
    },
    bottom: {
      bottom: 0,
      left: "calc(50% - 15px)",
      backgroundColor: "orange",
      color: "white",
    },
  }[props.position];
  return (
    <div
      style={{
        backgroundColor: "pink",
        color: "pink",
        position: "absolute",
        width: "30px",
        height: "30px",
        ...variant,
      }}
      onClick={props.action}
    >
      {props.text}
    </div>
  );
}

function RightBtn(props) {
  return (
    <LocationsBtn
      text="Right"
      action={() => {
        const moveToRight = [...props.context];
        const curr = moveToRight[props.index];
        moveToRight[props.index] = moveToRight[props.index + 1];
        moveToRight[props.index + 1] = curr;
        props.setContext(moveToRight);
        console.log(props.index);
      }}
      position="right"
    />
  );
}
function LeftBtn(props) {
  return (
    <LocationsBtn
      text="Left"
      action={() => {
        const c_copy = [...props.context];
        [c_copy[props.index], c_copy[props.index - 1]] = [
          c_copy[props.index - 1],
          c_copy[props.index],
        ];
        props.setContext(c_copy);
      }}
      position="left"
    />
  );
}
function UpBtn(props) {
  return (
    <LocationsBtn
      text="Up"
      position="top"
      action={() => {
        const c_copy = [...props.context];
        [c_copy[props.index], c_copy[props.index - props.itemsInRow]] = [
          c_copy[props.index - props.itemsInRow],
          c_copy[props.index],
        ];
        props.setContext(c_copy);
      }}
    />
  );
}
function DownBtn(props) {
  return (
    <LocationsBtn
      text="Down"
      position="bottom"
      action={() => {
        const c_copy = [...props.context];
        [c_copy[props.index], c_copy[props.index + props.itemsInRow]] = [
          c_copy[props.index + props.itemsInRow],
          c_copy[props.index],
        ];
        props.setContext(c_copy);
      }}
    />
  );
}

export default function Location(props) {
  const isInFirstRow = () => props.index >= props.itemsInRow;
  const isInLastRow = () =>
    props.context.length - (props.context.length % props.itemsInRow) >
    props.index + 1;
  const isInFirstColumn = () => props.index % props.itemsInRow !== 0;
  const isInLastColumn = () =>
    props.index % props.itemsInRow !== props.itemsInRow - 1;
  return (
    <div className="item">
      <div className="item-image">
        <img src={props.images} />
        <DelBtn {...props} />
        {props.index !== props.context.length - 1 && isInLastColumn() && (
          <RightBtn {...props} />
        )}
        {isInFirstColumn() && <LeftBtn {...props} />}
        {isInFirstRow() && <UpBtn {...props} />}
        {isInLastRow() && <DownBtn {...props} />}
      </div>
      <div className="item-information">
        <div className="item-title">{props.title}</div>
        <p className="location-destination-informaiton">{props.description}</p>
        <div className="item-price">{props.mfdDate}</div>
        <p className="item-dates">
          {props.expDate} - {props.mfdDate}
        </p>
      </div>
    </div>
  );
}
