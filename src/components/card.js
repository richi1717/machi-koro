import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    console.log(props.card);
    super(props);
    this.state = {
      isSelected: false,
      cardTotal: props.card.amount,
      cardName: props.card.name
    };
  }

  render() {
    if (this.props.card.type !== 'Landmark') {
      return <div>
        {this.handleCardRender()}
        {this.handleCardClickRender()}
        {this.purchaseCard()}
        {this.state.cardTotal >= 1 ? <h4 className="card-info">x{this.state.cardTotal}</h4> : null}
      </div>;
    } else {
      return null;
    }
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
    var selected = !this.state.isSelected;
    this.setState({ isSelected: selected });
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
    $('.image-view-selected').trigger('click');
  }

  buySelected() {
    $('.image-view-selected').trigger('click');
    this.setState({cardTotal: this.state.cardTotal - 1});
  }
};
