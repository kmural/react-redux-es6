import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>react-redux-es6</h1>
        <p>React, Redux and React Router in ES6</p>
        <Link to="about" className="btn btn-primary btn-tg">
          Learb More
        </Link>
      </div>
    );
  }
}

export default HomePage;
