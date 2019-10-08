import React, {useState} from "react";
import NumberButton from './NumberButton'
import { numbers } from '../../../data';

const Numbers = (props) => {
  const [numberState, setNumberState] = useState(numbers);
  console.log('numbers:', props.display);
  return (
    <div>
       {numberState.map((number, index) => (
          <NumberButton key={index} number={number} />
        ))}
    </div>
  );
  
};

export default Numbers;