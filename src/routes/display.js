import React, { Component } from "react";
import { connect } from "react-redux";
import CircularLoading from "../components/loadings/circularLoading.js";
import LinearProgress from "../components/loadings/linearProgress.js";
import Cart from "../components/carts/sharecart";
import LoginMenuTab from "../components/tabs/loginTab";

import Header from "../components/header/header";

class Display extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Show redux store data</h1>
        {this.props.storeArticles}
        {this.props.adminName}
        {this.props.adminMail}
        <CircularLoading />
        <LinearProgress />
        <LoginMenuTab />
        <Cart />
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
