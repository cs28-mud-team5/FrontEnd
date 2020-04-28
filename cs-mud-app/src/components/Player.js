import React from "react";

const Player = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Player;
