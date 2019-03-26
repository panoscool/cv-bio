import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import WorkTogether from "./pages/WorkTogether";
import Projects from "./pages/Projects";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/work-together" component={WorkTogether} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
