import React, { useState, useContext } from "react";
import { DungeonContext } from "../contexts/DungeonContext";
import axiosWithAuth from "./axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Move = (props) => {
  const { player, setPlayer } = useContext(DungeonContext);
  const [direction, setDirection] = useState({ direction: "" });

  const handleChanges = (e) => {
    setDirection({ ...direction, [e.target.name]: e.target.value });
  };

  const handleMove = (e) => {
    e.preventDefault();
    console.log(direction);
    axiosWithAuth()
      .post("/adv/move/", direction)
      .then((res) => {
        console.log(res);
        setPlayer(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleMove}>
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
      </Form>
    </div>
  );
};

export default Move;
