import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from '../containers/cards';
import { bindActionCreators } from 'redux';
import { cardShuffle } from '../actions/action_shuffle';

class CardsList extends Component {
  componentDidUpdate() {
    this.props.expansion !== 'Base' ? this.props.cardShuffle(this.props.deck) : null;
    // return null;
  }

  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
}

function mapStateToProps({ expansion, deck }) {
  return { expansion, deck };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cardShuffle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
