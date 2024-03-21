import React, { useState } from "react";
import "./styles.css";

function Button(props) {
  const handlerClick = () => {
    props.onClickAct(props.bkColor, props.txtColor);
  };
  return (
    <button className="Button" onClick={handlerClick} style={{ backgroundColor: props.bkColor }}>
      <p style={{ color: props.txtColor }}>{props.text}</p>
    </button>
  );
}
function DisplayBlock(props) {
  return (
    <div class="DisplayBlock" style={{ backgroundColor: props.bkColor }}>
        <p style={{ color: props.txtColor }}>Some text</p>
    </div>
  );
}
export default function App() {
  const [displayBkColor, setDisplayBkColor] = useState("white");
  const [displayTxtColor, setDisplayTxtColor] = useState("black");
  const stateFunc = (newBkColor, newTxtColor) => {
    setDisplayBkColor(newBkColor);
    setDisplayTxtColor(newTxtColor);
  };
  return (
    <>
      <Button bkColor="red" txtColor="green" text="Red" onClickAct={stateFunc} />
      <Button bkColor="green" txtColor="red" text="Green" onClickAct={stateFunc} />
      <Button bkColor="yellow" txtColor="blue" text="Yellow" onClickAct={stateFunc}/>
      <DisplayBlock bkColor={displayBkColor} txtColor={displayTxtColor}/>
    </>
  );
}