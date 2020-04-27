import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Auth from "./components/Auth";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
