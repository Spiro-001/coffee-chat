import { BrowserRouter, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login">
        
      </Route>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
