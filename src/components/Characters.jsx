import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters, onLikeClick, onDeleteClick } = this.props;
    return characters.map((character) => {
      return (
        <Character
          key={character.id}
          character={character}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      );
    });
  }
}

export default Characters;
