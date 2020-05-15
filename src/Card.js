import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "purple" };
  }
  render() {
    return (
      <div
        className="Card"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleCLick}
      ></div>
    );
  }
}

export default Card;
