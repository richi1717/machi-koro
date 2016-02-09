import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import _ from 'lodash';

class CardsList extends Component {
  renderCards(cardData) {
    const children = [];

    for (let key in cardData) {

      if (cardData[key].type !== 'Landmark') {
        const name = cardData[key].name;
        const imgFront = cardData[key].imgFront;
        const exp = cardData[key].gameSource;
        children.push(
          <div key={name}>
            <Card name={name} image={imgFront}>{exp}</Card>
          </div>
        );
      }

    }

    return children;
  }

  render() {
    return (
      <div className="card-container">
        {this.props.cards.map(this.renderCards)}
      </div>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards };
}

export default connect(mapStateToProps)(CardsList);
