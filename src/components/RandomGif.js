import React, { Component } from "react";

export class RandomGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    this.props.randomGif(this.state.isToggleOn);
  };

  render() {
    return (
      <div>
        <label>Click for surprise: </label>
        <button type="button" onClick={this.handleClick}>
          {this.state.isToggleOn} 🎊
        </button>
      </div>
    );
  }
}

export default RandomGif;
