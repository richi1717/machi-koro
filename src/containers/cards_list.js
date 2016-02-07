import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import _ from 'lodash';

class CardsList extends Component {
  renderCards(cardData) {
    const name = cardData.card.name;
    // const temps = _.map(cardData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    // const pressures = cardData.list.map(weather => weather.main.pressure);
    // const humidities = cardData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><Card data={temps} color="orange" units="Fº" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Fº)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
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
