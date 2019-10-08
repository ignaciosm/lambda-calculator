import React, {useState} from "react";

const NumberButton = (props) => {
  console.log('number buttons:', props.display);
  const numberValue = Number(props.number);

  let clicked = () => {
    let ignacio = props.display;
    console.log('clicked #:', numberValue);
    console.log(ignacio);
    
  };

  // let addNumber = () => {
  //   setDisplay(display => display + 1);
  // };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <button onClick={() => clicked()}>{numberValue}</button>
    </>
  );
};


export default NumberButton;