import React from "react";

const Character = props => {
  return (
  <div>
    <h1>Name: {props.character.name}</h1>
    <p>Height: {props.character.height}</p>
    <p>Mass: {props.character.mass}</p>
  </div>
  )
};

export default Character;
