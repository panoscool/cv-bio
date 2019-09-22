import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/PageLayout";

import Home from "./components/HomePage";
import About from "./components/About/AboutPage";
import Projects from "./components/Projects/ProjectsPage";
import Skills from "./components/Skills/SkillsPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
