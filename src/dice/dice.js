import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { diceRoll } from '../actions/action_roll';
import { addCoins } from '../actions/action_coins';
import Turn from '../containers/turn';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 0,
      dice2: 0,
      diceTotal: 0,
      showTurn: false
    };
  }

  componentDidUpdate() {
    this.props.purchasedCards.map((cards) => {
      if (cards.roll === this.props.diceTotal || cards.roll[0] === this.props.diceTotal || cards.roll[1] === this.props.diceTotal || cards.roll[2] === this.props.diceTotal) {
        if (cards.cardType !== 'Cafe') {
          this.props.addCoins(cards.paymentAmount);
        }
      }
    });
  }

  render() {
    return ( <span>
        <section className="container">
          {this.renderDice()}
        </section>
        <section className="container blue">
          {this.renderDice2()}
        </section>
        {this.showTurnInfo()}
      </span>
    );
  }

  showTurnInfo() {
    if (this.state.showTurn) {
      return <Turn />;
    }
  }

  renderDice() {
    return (
      <div id="cube" onClick={this.handleDiceClick.bind(this)}>
        <div className="front">
          <span className="dot dot1"></span>
        </div>
        <div className="back">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
        </div>
        <div className="right">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
        <div className="left">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
        </div>
        <div className="top">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <div className="bottom">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
          <span className="dot dot6"></span>
        </div>
      </div>
    );
  }

  renderDice2() {
    return (
      <div id="cube2" onClick={this.handleDice2Click.bind(this)}>
        <div className="front">
          <span className="dot dot1"></span>
        </div>
        <div className="back">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
        </div>
        <div className="right">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
        <div className="left">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
        </div>
        <div className="top">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <div className="bottom">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
          <span className="dot dot6"></span>
        </div>
      </div>
    );
  }

  handleDiceClick(dice2) {
    this.setState({ showTurn: true });
    dice2 = typeof dice2 === 'number' ? dice2 : 0;
    const ranNum = _.random(1, 6);
    this.props.diceRoll(ranNum, dice2);
    const cube = document.getElementById('cube');
    let xRand;
    let yRand;
    switch (ranNum) {
      case 1:
      xRand = 720;
      yRand = 1445;
      break;
      case 2:
      xRand = 1800;
      yRand = 910;
      break;
      case 3:
      xRand = 1800;
      yRand = 640;
      break;
      case 4:
      xRand = 1800;
      yRand = 1160;
      break;
      case 5:
      xRand = 2060;
      yRand = 1350;
      break;
      case 6:
      xRand = 1890;
      yRand = 910;
      break;
    }
    cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
  }

  handleDice2Click() {
    const cube2 = document.getElementById('cube2');
    const ranNum = _.random(1, 6);
    this.handleDiceClick(ranNum);
    let xRand;
    let yRand;
    switch (ranNum) {
      case 1:
      xRand = 720;
      yRand = 1445;
      break;
      case 2:
      xRand = 1800;
      yRand = 910;
      break;
      case 3:
      xRand = 1800;
      yRand = 640;
      break;
      case 4:
      xRand = 1800;
      yRand = 1160;
      break;
      case 5:
      xRand = 2060;
      yRand = 1350;
      break;
      case 6:
      xRand = 1890;
      yRand = 910;
      break;
    }
    cube2.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    cube2.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
  }

}

function mapStateToProps({ purchasedCards, diceTotal }) {
  return { purchasedCards, diceTotal };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ diceRoll, addCoins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
