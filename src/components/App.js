import React, { Component } from "react";
import { Route } from "react-router-dom";
import { PropTypes } from "prop-types";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./course/CoursesPage";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
