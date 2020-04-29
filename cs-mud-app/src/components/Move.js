import React, { useState, useContext, useEffect} from "react";
import { DungeonContext } from "../contexts/DungeonContext";
import axiosWithAuth from "./axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Move = (props) => {
  const { player, setPlayer } = useContext(DungeonContext);
  const [direction, setDirection] = useState({ direction: "" });

//   const handleChanges = (e) => {
//     setDirection({ ...direction, [e.target.name]: e.target.value });
//   };
useEffect (() => {
    console.log(direction);
    if ( direction.direction !== ""){
    axiosWithAuth()
    .post("/adv/move/", direction)
    .then((res) => {
        console.log(res);
        setPlayer(res.data);
    })
    .catch((err) => console.log(err));
    }
},[direction])

  const handleMove = (e) => {
    e.preventDefault();
    
    setDirection({ ...direction, [e.target.name]: e.target.value})
  };

  return (
    <div>
        <button name="direction" value="n" onClick={handleMove}>
            &#8657;
        </button>
        <button name="direction" value="w" onClick={handleMove}>
            &#8656;
        </button>
        <button name="direction" value="e" onClick={handleMove}>
            &#8658;
        </button>
        <button name="direction" value="s" onClick={handleMove}>
            &#8659;
        </button>
      {/* <Form onSubmit={handleMove}>
        <FormGroup>
          <Label for="direction">Direction: (n, s, e, or w)</Label>
          <Input
            type="text"
            name="direction"
            onChange={handleChanges}
            value={direction.direction}
          />
        </FormGroup>
        <Button>Move</Button>
      </Form> */}
    </div>
  );
};

export default Move;
