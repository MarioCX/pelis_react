// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ShowList from "./assets/components/ShowList/showList";
import ShowDetail from "./assets/components/ShowDetail/showDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowList} />
        <Route path="/detalle/:id" component={ShowDetail} />
      </Switch>
    </Router>
  );
}

export default App;
