import React, { Component } from 'react';

import Expansion from '../containers/expansion_buttons';
import CardsList from '../containers/cards_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Expansion />
      </div>
    );
  }
}
