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
        children.push(
          <tr key={name}>
            <td><Card name={name} image={imgFront} /></td>
          </tr>
        );
      }

    }

    return children;
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Card Name</th>
          </tr>
        </thead>
        <tbody className="card-container">
          {this.props.cards.map(this.renderCards)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards };
}

export default connect(mapStateToProps)(CardsList);
