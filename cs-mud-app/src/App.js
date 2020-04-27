import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Auth from "./components/Auth";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
