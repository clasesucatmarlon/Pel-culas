import React from "react";

import ListFilm from "./components/ListFilm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blog } from "./components/Blog";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <ListFilm />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
