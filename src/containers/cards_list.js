import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import _ from 'lodash';

class CardsList extends Component {
  renderCards(cardData) {
    console.log(this.props.expansion);
    const children = [];
    console.log(cardData);
    cardData.map((card, index) => {
      children.push(
        <Card card={card} key={index} />
      );
    });
    return children;
  }

  render() {
    console.log(this.props);
    return (
      <div className="card-container">
        {this.props.cards.map(this.renderCards.bind(this))}
      </div>
    );
  }
}

function mapStateToProps({ cards, expansion }) {
  return { cards, expansion };
}

export default connect(mapStateToProps)(CardsList);
