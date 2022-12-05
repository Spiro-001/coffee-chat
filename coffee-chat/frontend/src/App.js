import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateUserForm } from "./components/CreateUserForm";
import { LoginForm } from "./components/LoginForm";

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <CreateUserForm />
      </Route>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
