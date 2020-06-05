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

    render() {
        return (
            <>
                <div>
                    <label htmlFor="search">Search GIFS</label><br/>
                    <input
                    name="search"
                    onChange={this.handleChange}
                    ></input>
                </div>
            </>
        )
    }
}

export default SearchField;