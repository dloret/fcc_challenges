import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../state/actions";
import '../styles/Next.scss';

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  updateQuote = (categories) => {
  }

  handleClick = e => {
    const { categories } = this.props;
    this.setState((prevState) => {
      let quotesURL = "http://quotes.rest/qod.json?category=";

      if(this.state.count >= categories.length - 1) {
        quotesURL = `${quotesURL}${categories[0]}`;
        this.props.getQuote(quotesURL);
        return {count: 0};
      } else {
        quotesURL = `${quotesURL}${categories[prevState.count + 1]}`;
        this.props.getQuote(quotesURL);
        return { count: this.state.count + 1 };
      }
    })
  };

  render() {
    return (
      <button id="new-quote" onClick={this.handleClick}>
        gimme another!
      </button>
    );
  }
}

const mapDispatchToProps = {
  getQuote
};

export default connect(
  null,
  mapDispatchToProps
)(Next);
