import React, { Component } from 'react';

import Expansion from '../containers/expansion_buttons';
import CardsList from '../containers/cards_list';
import Card from './card.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Expansion />
        <CardsList />
      </div>
    );
  }
}
