import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortCards from '../utils/sort';
import { bindActionCreators } from 'redux';
import { addCoins } from '../actions/action_coins';
import Coins from '../coins/coins';
import PurchasedCard from '../components/purchased_card';

class Turn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.renderPurchasedCards = this.renderPurchasedCards.bind(this);
    this.renderCoins = this.renderCoins.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props.coins);
  }

  render() {
    let cards = sortCards(this.props.purchasedCards);
    return <div>
      {this.renderCoins()}
      <div className="turn-container">
        {cards.map(this.renderPurchasedCards)}
        <h4>
          {typeof this.props.diceTotal === 'number' ? 'You rolled a ' + this.props.diceTotal + '!' : null}
        </h4>
      </div>
    </div>;
  }

  renderCoins() {
    return (
      <div className="coin-container">
        <p>{'x' + this.props.coins}</p>
        <Coins />
      </div>
    );
  }

  renderPurchasedCards(card, index) {
    return (<PurchasedCard card={card} key={index}/>);
  }
}

function mapStateToProps({ diceTotal, purchasedCards, coins }) {
  return { diceTotal, purchasedCards, coins };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCoins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Turn);
