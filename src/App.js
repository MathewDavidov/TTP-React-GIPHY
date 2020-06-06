import React, { Component } from "react";
import axios from "axios";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";
import "./App.css";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_TRENDING_URI = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className>
          <nav className="navbar navbar-dark bg-dark text-center">
            <span className="navbar-text text-white">GIPHY Search</span>
          </nav>
          <div className="container">
            <GifCard />
          </div>
        </div>
      </>
    );
  }
}

export default App;
