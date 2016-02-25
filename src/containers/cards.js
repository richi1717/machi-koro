import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';

class Cards extends Component {
  renderCards(cardData) {
    const children = [];
    let num = 0;
    cardData.map((card, index) => {
      if (card.type !== 'Landmark') {
        num++;
        this.props.expansion !== 'Base' ? card.amount = 1 : null;
        children.push(
          <Card card={card} exp={this.props.expansion} num={num} key={index} />
        );
      }
    });
    return children;
  }

  chooseDeck() {
    if (this.props.expansion !== 'Base') {
      return this.renderCards(this.props.shuffledCards);
    } else {
      return this.props.cards.map(this.renderCards.bind(this));
    }
  }
  render() {
    return (
      <div className={this.props.expansion !== 'Base' ? "card-container expansion" : "card-container"}>
      {this.chooseDeck()}
      </div>
    );
  }
}

function mapStateToProps({ cards, expansion, shuffledCards }) {
  return { cards, expansion, shuffledCards };
}

export default connect(mapStateToProps)(Cards);
