import React, { useEffect, useContext } from "react";
import axiosWithAuth from "./axiosWithAuth";
import { DungeonContext } from "../contexts/DungeonContext";
import Player from "./Player";
import Move from "./Move";
import Map from "./Map";
import { GameBox, HudBox, CenterMap } from "./Styles";

const GameContainer = () => {
  const { player, setPlayer } = useContext(DungeonContext);
  const { currentPlayerRoom, setCurrentPlayerRoom } = useContext(
    DungeonContext
  );

  useEffect(() => {
    const initialize = () => {
      axiosWithAuth()
        .get("/adv/init/")
        .then((res) => {
          setPlayer(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log("Error initializing: ", err));
    };
    const setTheCurrentRoom = () => {
      axiosWithAuth()
        .get("/adv/currentRoom")
        .then((res) => {
          setCurrentPlayerRoom(res.data);
        })
        .catch((err) => console.log(err));
    };
    initialize();
    setTheCurrentRoom();
  }, [setPlayer, setCurrentPlayerRoom]);

  return (
    <GameBox>
      <h1>Team 5 MUD adventure</h1>
      <CenterMap>
        <Map />
      </CenterMap>
      <HudBox>
        <Player player={player} />
        <Move />
      </HudBox>
    </GameBox>
  );
};

export default GameContainer;
