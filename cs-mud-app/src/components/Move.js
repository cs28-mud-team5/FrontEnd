import React, { useState, useContext } from "react";
import { DungeonContext } from "../contexts/DungeonContext";
import axiosWithAuth from "./axiosWithAuth";

const Move = (props) => {
  const { player, setPlayer } = useContext(DungeonContext);
  const [direction, setDirection] = useState({ direction: "" });

  const handleMove = (e) => {
    e.preventDefault();
    setDirection({ ...direction, direction: e.target.value });
    axiosWithAuth()
      .post("/adv/move/", direction)
      .then((res) => {
        setPlayer(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button name="n" value={direction} onClick={handleMove}>
        &#8657;
      </button>
      <button name="w" value={direction} onClick={handleMove}>
        &#8656;
      </button>
      <button name="e" value={direction} onClick={handleMove}>
        &#8658;
      </button>
      <button name="s" value={direction} onClick={handleMove}>
        &#8659;
      </button>
    </div>
  );
};

export default Move;
