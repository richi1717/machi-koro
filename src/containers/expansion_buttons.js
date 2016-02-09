import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCards } from '../actions/index';

class ExpansionButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { expansion: '' };

    this.handleExpansionSelection = this.handleExpansionSelection.bind(this);
    this.handleBaseClick = this.handleBaseClick.bind(this);
    this.handleHarborClick = this.handleHarborClick.bind(this);
    this.handleMillionClick = this.handleMillionClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }

  handleExpansionSelection(event) {
    event.preventDefault();
    event.target.remove();

    // We need to go and fetch cards data
    this.props.fetchCards(this.state.expansion);
  }

  handleBaseClick() {
    this.setState({ expansion: 'Base' });
  }

  handleHarborClick() {
    this.setState({ expansion: 'Harbor' });
  }

  handleMillionClick() {
    this.setState({ expansion: 'Millionaires Row' });
  }

  handleAllClick() {
    this.setState({ expansion: 'All' });
  }

  render() {
    return (
      <form onSubmit={this.handleExpansionSelection} className="btn-container">
        <button onClick={this.handleBaseClick} type="submit" className="btn btn-padding btn-success">Base</button>
        <button onClick={this.handleHarborClick} type="submit" className="btn btn-padding btn-primary">Harbor</button>
        <button onClick={this.handleMillionClick} type="submit" className="btn btn-padding btn-warning">Millionaire's Row</button>
        <button onClick={this.handleAllClick} type="submit" className="btn btn-padding btn-danger">All</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards }, dispatch);
}

export default connect(null, mapDispatchToProps)(ExpansionButtons);
