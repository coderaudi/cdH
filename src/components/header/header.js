import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#" />
          {/* <img
            src="/docs/4.1/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /> */}
          Bootstrap
        </nav>
      </div>
    );
  }
}

export default Header;
