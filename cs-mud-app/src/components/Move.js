import React, { useState, useContext, useEffect } from "react";
import { DungeonContext } from "../contexts/DungeonContext";
import axiosWithAuth from "./axiosWithAuth";

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
    </div>
  );
};

export default Move;
