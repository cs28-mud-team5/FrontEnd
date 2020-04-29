import React from "react";
import { PlayerBox } from "./Styles";

const Player = (props) => {
  return (
    <PlayerBox>
      <h2>Name: {props.player.name}</h2>
      <h3>Location: {props.player.title}</h3>
      <p>{props.player.description}</p>
    </PlayerBox>
  );
};

export default Player;
