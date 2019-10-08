import React, {useState} from "react";
import NumberButton from './NumberButton'
import { numbers } from '../../../data';
console.log('Numbers array:', numbers);

export default function Numbers() {
  
  // const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map((number, index) => (
          <NumberButton key={index} number={number} />
        ))}
    </div>
  );
// };

}

