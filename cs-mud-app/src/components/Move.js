import axios from "axios"
import React, { useState } from "react";


const Move = (props) => {
    const [save, setSave] = useState([])
    const [direction, setDirection] = useState("");
    const [display, setDisplay]
   

const handleMove = (e) => {
  e.preventDefault(); 
  setDirection(e.target.name);
  setSave(  );
  axiosWithAuth()
    .post("/adv/move/", direction, localStorage.getItem("token"))
    .then((res) => {
      
    })
    .catch((err) => console.log(""));
};

return(
    <div>
        <button name="n" onClick={handleMove}>\u21D2&#8658;&rArr;%u21D2%E2%87%92</button>
        <button name="w" onClick={handleMove}>\u21D0&#8656;&lArr;%u21D0%E2%87%90</button>
        <button name="e" onClick={handleMove}>\u21D2&#8658;&rArr;%u21D2%E2%87%92</button>
        <button name="s" onClick={handleMove}>\u21D3&#8659;&dArr;%u21D3%E2%87%93</button>
    </div>
    
)
};

export default Move;
