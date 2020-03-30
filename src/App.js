import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./components/HomePage";
import Projects from "./components/Projects/ProjectsPage";
import Skills from "./components/Skills/SkillsPage";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  // Change theme color when user switches on/off dark mode
  document.querySelector("meta[name=theme-color]").setAttribute("content", theme === "light" ? "#ffffff" : "#000000");

  return (
    <Layout>
      <CssBaseline />
      <ScrollToTop />
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
