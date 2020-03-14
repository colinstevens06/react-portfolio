import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Pages
import Home from "../src/pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NoMatch from "./pages/NoMatch"

function App() {
  return (

    <Router>
      <div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
