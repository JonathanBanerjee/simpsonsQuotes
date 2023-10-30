import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image, name, liked } = this.props;

    return (
      <div className="image">
        <img src={image} alt={name} className={liked ? "big" : "small"} />
      </div>
    );
  }
}

export default Image;
