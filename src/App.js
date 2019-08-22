import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Container } from "@material-ui/core";

import Layout from "./components/Layout";
import "./App.css";

import Home from "./components/HomePage";
import About from "./components/About/AboutPage";
import Projects from "./components/Projects/ProjectsPage";
import Skills from "./components/Skills/SkillsPage";

function App() {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Layout>
  );
}

export default withRouter(App);
