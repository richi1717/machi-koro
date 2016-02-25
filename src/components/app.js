import React, { Component } from 'react';

import Expansion from '../containers/expansion_buttons';
import CardsList from '../containers/cards_list';
import Card from './card.js';
import Dice from '../dice/dice';
import Coins from '../coins/coins';
import Turn from '../containers/turn';

export default class App extends Component {
  render() {
    return (
      <div>
        <Expansion />
        <CardsList />
        <Dice />
      </div>
    );
  }
}
