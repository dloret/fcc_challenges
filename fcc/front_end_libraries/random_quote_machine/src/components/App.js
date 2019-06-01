import React from "react";
import { connect } from "react-redux";

import Quote from "./Quote";
import Twitter from "./Twitter";
import Next from "./Next";

import { getCategories, getQuote } from "../state/actions";
import "../styles/App.scss";

const quoteCategoriesURL = "http://quotes.rest/qod/categories.json";

class App extends React.Component {
  componentWillMount() {
    this.props.getCategories(quoteCategoriesURL);
    this.props.getQuote();
  }

  render() {
    // console.log(this.props);
    const { categories, quote } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random quote machine</h1>
        </header>
        <main id="quote-box">
          <Quote author={quote.author} quote={quote.quote} />
          <Twitter />
          <Next categories={categories} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  quote: state.quote
});

const mapDispatchToProps = {
  getCategories,
  getQuote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
