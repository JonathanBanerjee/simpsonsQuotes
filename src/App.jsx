import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import "./App.css";
import { sortCharacters } from "./utils/sort";
import Sort from "./components/Sort";
import Characters from "./components/Characters";
class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=25`
      );

      data.forEach((el) => {
        el.id = Math.round(Math.random() * 100000000);
        el.liked = false;
      });

      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  onLikeClick = (id) => {
    console.log("Like clicked", id);
    const Simpsons = [...this.state.simpsons];
    const index = Simpsons.findIndex((item) => item.id === id);

    if (index !== -1) {
      Simpsons[index].liked = !Simpsons[index].liked;
      this.setState({ simpsons: Simpsons });
    }
  };

  onDeleteClick = (id) => {
    const Simpsons = [...this.state.simpsons];
    const index = Simpsons.findIndex((item) => item.id === id);
    if (index !== -1) {
      Simpsons.splice(index, 1);
      this.setState({ simpsons: Simpsons });
    }
  };

  onSortSelection = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  render() {
    // console.log(this.state);
    const { simpsons, sort } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    //Copy the simpsons
    const _simpsons = [...simpsons];

    //Call my sort logic
    sortCharacters(sort, _simpsons);

    return (
      <div className="container">
        <Sort onSortSelection={this.onSortSelection} />
        <Characters
          characters={_simpsons}
          onDeleteClick={this.onDeleteClick}
          onLikeClick={this.onLikeClick}
        />
      </div>
    );
  }
}

export default App;
