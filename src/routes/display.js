import React, { Component } from "react";
import { connect } from "react-redux";
import CircularLoading from "../components/loadings/circularLoading.js";
import LinearProgress from "../components/loadings/linearProgress.js";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Show redux store data</h1>
        {this.props.storeArticles}
        {this.props.adminName}
        {this.props.adminMail}
        <CircularLoading />
        <LinearProgress />
      </div>
    );
  }
}

const mapStateToProps = ({ admin, article }) => {
  return {
    // storeCounter: article,
    storeArticles: article.defaultNumber,
    adminName: admin.adminName,
    adminMail: admin.adminMail
  };
};

export default connect(mapStateToProps)(Display);
