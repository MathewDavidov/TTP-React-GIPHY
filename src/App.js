import React, { Component } from 'react';
import axios from "axios";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";
import './App.css';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_TRENDING_URI = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      random: ""
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
          results: response.data.data
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          results: []
        })
    });
  }

  search = (searchInput) => {
    if (searchInput.length >= 1) {
      const API_URI = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&limit=10`
      this.fetchAPIData(API_URI);
    }
  }

  random = () => {
    const API_URI = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    axios
      .get(API_URI)
      .then((response) => {
        const data = response.data.data;
        this.setState({
          random: data
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          random: ""
        })
      });
  }

  render() {
    let resultsArr = [];
    if (this.state.random.length !== 0) {
      resultsArr = (
        <div className="col-md-4">
          <GifCard
            src={this.state.random.images.original.url}
          />
        </div>
      )
    } else {
      resultsArr = (
        <div className="col-md-4">
          {this.state.results.map((obj) => (
            <GifCard
              src={obj.images.original.url}
              key={obj.id}
            />
          ))}
        </div>
      )
    }

    return (
      <>
        <div className>
          <nav className="navbar navbar-dark bg-dark text-center">
            <span className="navbar-text text-white">GIPHY Search</span>
          </nav>
          <div className="container">
            <SearchField search={this.search} random={this.random}
            />
          </div>

          <div className="container">
            <div className="row justify-content-center">
              {resultsArr}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
