import React, {useState} from "react";
import Numbers from '../ButtonComponents/NumberButtons/Numbers';

const Display = (props) => {

  return <div className="display">{props.display}</div>;
};
export default Display;