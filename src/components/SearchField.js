import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSearch: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            inputSearch: e.target.value
        })

        this.props.search(e.target.value);
    }

    handleSubmit = () => {
        this.props.random();
    }

    render() {
        return (
            <div className="jumbotron">
                <div>
                    <label htmlFor="search">Search GIFS</label><br/>
                    <input
                    name="search"
                    onChange={this.handleChange}
                    ></input>
                </div>
                <div>
                    <input type="submit" value="Random GIF" onClick={this.handleSubmit}></input>
                </div>
            </div>
        )
    }
}

export default SearchField;