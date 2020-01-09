import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AutoZoneWrapper from "./component/AutoZoneWrapper";
import { TextAutoZone, Container } from "./style/style";

function App() {
  return (
    <div>
      <TextAutoZone>Autozone shopping cart</TextAutoZone>
      <Router>
        <Container>
          <Switch>
            <Route path="/">
              <AutoZoneWrapper />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
