import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkTogether from "./pages/WorkTogether";
import Auth from "./pages/Auth";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/work-together" component={WorkTogether} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
