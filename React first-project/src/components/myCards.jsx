import React, { Component } from "react";
import cardService from "../services/cardService";
import PageHeader from "./common/pageHeader";
import Card from "./cards";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }
  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => <Card key={card._id} card={card} />)}
        </div>
      </div>
    );
  }
}

export default MyCards;
