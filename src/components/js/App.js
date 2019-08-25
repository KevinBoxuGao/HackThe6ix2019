import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import PropTypes from "prop-types";
import TripDisplay from "./TripDisplay"
import SideBar from "./SideBar.js"

class App extends React.Component {
  static propTypes = {
    user: PropTypes.string,
    password: PropTypes.string,
  }

  render() {
    return (
      <div>
        <SideBar></SideBar>
        <TripDisplay user={this.props.user} password={this.props.password}></TripDisplay>
      </div>
    );
  }
}

export default App;