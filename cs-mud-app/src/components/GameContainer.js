import React, { useEffect, useContext } from "react";
import axiosWithAuth from "./axiosWithAuth";
import { DungeonContext } from "../contexts/DungeonContext";
import Player from "./Player";

const GameContainer = () => {
  const { player, setPlayer } = useContext(DungeonContext);

  useEffect(() => {
    const initialize = () => {
      axiosWithAuth()
        .get("/adv/init")
        .then((res) => {
          setPlayer(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log("Error initializing: ", err));
    };
    initialize();
  });

  return (
    <div>
      <h1>Team 5 MUD adventure</h1>
      <Player player={player} />
    </div>
  );
};

export default GameContainer;
