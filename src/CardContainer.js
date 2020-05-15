import React, { Component } from "react";
import Card from "./Card";
import "./CardContainer.css";

class CardContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allCard: [
      "#010",
      "#020",
      "#030",
      "#040",
      "#050",
      "#060",
      "#070",
      "#080",
      "#090",
      "#100",
    ],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Card colors={this.props.allCard} />
    ));
    return <div className="CardContainer">{boxes}</div>;
  }
}

export default CardContainer;
