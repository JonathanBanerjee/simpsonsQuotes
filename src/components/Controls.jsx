import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    const { text, onLikeClick, id, liked, onDeleteClick } = this.props;
    return (
      <div className="controls">
        <Button onClick={onDeleteClick} text={"Delete"} id={id} />
        <Button
          onClick={onLikeClick}
          className={liked ? "Like" : "Not liked"}
          text={liked ? "Already " + (text || "Liked") : text || "Like"}
          id={id}
          liked={liked}
        />
      </div>
    );
  }
}

export default Controls;
