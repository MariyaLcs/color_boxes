import React, { Component } from "react";
import { choice } from "./helpers";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleCLick = this.handleCLick.bind(this);
  }

  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  handleCLick() {
    this.pickColor();
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
