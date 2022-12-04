import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
