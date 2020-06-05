import React, { Component } from 'react';

class GifCard extends Component {
    render() {
        return (
            <div className="card" style={{ width: 25 + "rem" }}>
                <div className="card-body text-center">
                    <img
                    src={this.props.src}
                    alt={"GIF"}
                    ></img>
                </div>
            </div>
        )
    }
}

export default GifCard;