import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special] = useState(specials);
  console.log(special);

  return (
    <div className="specContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {special.map((sp, index) => (
         <SpecialButton key = {index} sp = {sp} />
       ))}
    </div>
  );
};

export default Specials;