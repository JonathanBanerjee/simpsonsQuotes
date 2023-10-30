import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.character;

    const { onLikeClick, onDeleteClick } = this.props;
    // console.log(characterDirection);

    if (characterDirection === "Left") {
      return (
        <div className="character">
          <Name name={character} />
          <Image image={image} liked={liked} />
          <Quote quote={quote} />
          <Controls
            onLikeClick={onLikeClick}
            id={id}
            liked={liked}
            onDeleteClick={onDeleteClick}
          />
        </div>
      );
    }

    return (
      <div className="character">
        <Name name={character} />
        <Quote quote={quote} />
        <Image image={image} liked={liked} />
        <Controls
          onLikeClick={onLikeClick}
          id={id}
          liked={liked}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }
}

export default Character;
