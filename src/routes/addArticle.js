import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

class AddArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.submitArticleHandler = this.submitArticleHandler.bind(this);
  }

  nameChangeHandler = event => {
    const enterdName = event.target.value;
    this.setState({ title: enterdName });
  };

  submitArticleHandler = event => {
    event.preventDefault();

    this.props.addArticle(this.state.title);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitArticleHandler}>
          <input
            type="text"
            onChange={event => this.nameChangeHandler(event)}
          />
          <button type="submit">SUbmit</button>
        </form>
        {this.state.name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeCounter: state.counter,
    storeArticles: state.articles
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     : articles => dispatch(addArticle(articles))
//   };
// };
export default connect(
  mapStateToProps,
  { addArticle }
)(AddArticle);
