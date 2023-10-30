import React, { Component } from "react";
import Characters from "./Characters";
import Sort from "./Sort";
import { sortCharacters } from "../utils/sort";
import Filter from "./Filter";
import { filterCharacters } from "../utils/filter";
class Interface extends Component {
  render() {
    const {
      onSortSelection,
      onDeleteClick,
      onLikeClick,
      characters,
      sort,
      onFilterInput,
      filter,
    } = this.props;

    //Call my sort logic
    sortCharacters(sort, characters);

    //Filter the data
    filterCharacters(filter, characters);

    return (
      <div className="container">
        <Sort onSortSelection={onSortSelection} />
        <Filter onFilterInput={onFilterInput} />

        <Characters
          characters={characters}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      </div>
    );
  }
}

export default Interface;
