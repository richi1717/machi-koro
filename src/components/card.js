import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { purchaseCard } from '../actions/action_purchase';
import { addCoins } from '../actions/action_coins';
let num = 10;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      cardTotal: this.props.card.amount,
      purchased: null
    };
  }

  render() {
    // console.log(num);
    if (this.props.exp === 'Base') {
      return <div ref={this.props.card.name}>
        {this.handleCardRender()}
        {this.handleCardClickRender()}
        {this.purchaseCard()}
        {this.state.cardTotal >= 1 ? <h4 className="card-info">x{this.state.cardTotal}</h4> : null}
      </div>;
    } else if (this.props.num <= num) {
      return <div ref={this.props.card.name}>
        {this.handleCardRender()}
        {this.handleCardClickRender()}
        {this.purchaseCard()}
        {this.state.cardTotal >= 1 ? <h4 className="card-info">x{this.state.cardTotal}</h4> : null}
      </div>;
    } else if (this.props.num > num) {
      return <span>
        {this.buildDeck()}
      </span>;
    } else {
      return null;
    }
  }

  buildDeck() {
    return <img className="deck-view" src="./images/deck-back.jpg" />;
  }

  handleCardRender() {
    if (this.state.cardTotal >= 1) {
      return <img onClick={this.cardClick.bind(this)} className="image-view" src={this.props.card.imgFront} />;
    }
  }

  handleCardClickRender() {
    if (this.state.isSelected) {
      return <img onClick={this.cardClick.bind(this)} className="image-view-selected" src={this.props.card.imgFront} />;
    }
  }

  cardClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  purchaseCard() {
    if (this.state.isSelected) {
      return <div>
        <button onClick={this.buySelected.bind(this)} className="btn btn-success btn-purchase left">Buy</button>
        <button onClick={this.returnCard.bind(this)} className="btn btn-danger btn-purchase right">Back</button>
      </div>;
    }
  }

  returnCard() {
    this.setState({ isSelected: false });
  }

  buySelected() {
    if (this.state.cardTotal === 1) {
      let name = this.props.card.name;
      let node = this.refs[name];
      node.style = 'display: none';
    }
    console.log(this.props.coins, this.props.card.cost);
    if (this.props.coins - this.props.card.cost >= 0) {
      num++;
      this.setState({
        cardTotal: this.state.cardTotal - 1,
        isSelected: false
      });
      this.props.addCoins(-this.props.card.cost);
      this.props.purchaseCard(this.props.card);
    } else {
      this.setState({isSelected: false});
      alert("You don't have enough money!");
    }
  }
}

function mapStateToProps({ purchasedCards, coins }) {
  return { purchasedCards, coins };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ purchaseCard, addCoins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
