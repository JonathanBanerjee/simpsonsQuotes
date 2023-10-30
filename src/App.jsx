import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import "./App.css";
import Interface from "./components/Interface";
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

  onFilterInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    // console.log(this.state);
    const { simpsons, sort, filter } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    //Copy the simpsons
    const _simpsons = [...simpsons];

    return (
      <Interface
        onSortSelection={this.onSortSelection}
        onDeleteClick={this.onDeleteClick}
        onLikeClick={this.onLikeClick}
        characters={_simpsons}
        sort={sort}
        filter={filter}
        onFilterInput={this.onFilterInput}
      />
    );
  }
}

export default App;
