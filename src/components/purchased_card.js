import React, { Component } from 'react';

export default class PurchasedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
    this.viewCard = this.viewCard.bind(this);
    this.renderPurchasedCards = this.renderPurchasedCards.bind(this);
    this.renderPurchasedCardsClick = this.renderPurchasedCardsClick.bind(this);
  }
  render() {
    return (
      <div>
        {this.renderPurchasedCards()}
        {this.renderPurchasedCardsClick()}
      </div>
    );
  }

  renderPurchasedCards() {
    return (<img onClick={this.viewCard} className="image-view-purchased" src={this.props.card.imgFront} key={this.props.key} />);
  }

  renderPurchasedCardsClick() {
    if (this.state.isSelected) {
      return (<img onClick={this.viewCard} className="image-view-purchased-selected" src={this.props.card.imgFront} key={this.props.key} />);
    }
  }

  viewCard() {
    this.setState({isSelected: !this.state.isSelected});
  }
}
