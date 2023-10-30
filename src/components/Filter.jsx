import React, { Component } from "react";
class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="filter">Search</label>
        <input type="text" id="filter" onInput={this.props.onFilterInput} />
      </div>
    );
  }
}

export default Filter;
