import React, { Component } from "react";
import Card from "./Card";

class ColorBox extends Component {
  static defaultPtops = {
    card: [
      { id: 1, color: "#010" },
      { id: 2, color: "#020" },
      { id: 3, color: "#030" },
      { id: 4, color: "#040" },
      { id: 5, color: "#050" },
      { id: 6, color: "#060" },
      { id: 7, color: "#070" },
      { id: 8, color: "#080" },
      { id: 9, color: "#090" },
      { id: 10, color: "#100" },
      { id: 11, color: "#110" },
      { id: 12, color: "#120" },
      { id: 13, color: "#130" },
      { id: 14, color: "#140" },
      { id: 15, color: "#150" },
      { id: 16, color: "#160" },
      { id: 17, color: "#170" },
      { id: 18, color: "#180" },
    ],
  };
  render() {
    return <Card color={card.color} />;
  }
}

export default ColorBox;
