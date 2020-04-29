import React from "react";

const Player = (props) => {
  return (
    <div>
      <h1>Name: {props.player.name}</h1>
      <h2>Location: {props.player.title}</h2>
      <p>{props.player.description}</p>
    </div>
  );
};

export default Player;
