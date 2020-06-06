import React, { Component } from "react";
import axios from "axios";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";
import RandomGif from "./components/RandomGif";
import "./App.css";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_TRENDING_URI = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&=10`;
console.log(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      isToggled: false,
    };
  }

  componentDidMount() {
    this.fetchAPIData(API_TRENDING_URI);
  }

  fetchAPIData = (API_URI) => {
    axios
      .get(API_URI)
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        this.setState({
          results: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          results: [],
        });
      });
  };

  search = (searchInput) => {
    const API_URI = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&=10`;
    this.fetchAPIData(API_URI);
  };

  randomGif = () => {
    const RAND_URI = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    this.fetchAPIData(RAND_URI);
  };

  render() {
    console.log(this.randomGif);
    return (
      <>
        <div className>
          <nav className="navbar navbar-dark bg-dark text-center">
            <span className="navbar-text text-white">GIPHY Search</span>
          </nav>
          <div className="container">
            <SearchField search={this.search} />
          </div>
          <div>
            <RandomGif {...this.randomGif} />
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                {this.state.results.map((obj) => (
                  <GifCard src={obj.images.original.url} key={obj.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
