import React, { useState, useContext, useEffect } from "react";
import { DungeonContext } from "../contexts/DungeonContext";
import axiosWithAuth from "./axiosWithAuth";
import { ButtonsBox, MoveButton } from "./Styles";

const Move = () => {
  const { player, setPlayer } = useContext(DungeonContext);
  const [direction, setDirection] = useState({ direction: "" });

  const handleMove = (e) => {
    e.preventDefault();
    setDirection({ ...direction, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (direction.direction !== "") {
      axiosWithAuth()
        .post("/adv/move/", direction)
        .then((res) => {
          console.log(res);
          setPlayer(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [direction]);

  return (
    <ButtonsBox>
      <div>
        <MoveButton name="direction" value="n" onClick={handleMove}>
          &#8657;
        </MoveButton>
      </div>
      <div>
        <MoveButton name="direction" value="w" onClick={handleMove}>
          &#8656;
        </MoveButton>
        <MoveButton name="direction" value="e" onClick={handleMove}>
          &#8658;
        </MoveButton>
      </div>
      <div>
        <MoveButton name="direction" value="s" onClick={handleMove}>
          &#8659;
        </MoveButton>
      </div>
    </ButtonsBox>
  );
};

export default Move;
