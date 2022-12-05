import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateUserForm } from "./components/CreateUserForm";
import { LoginForm } from "./components/LoginForm";
import { Feed } from "./components/Feed";
import { HomeLoggedOut } from "./components/HomeLoggedOut";

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/feed">
        <Feed />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <CreateUserForm />
      </Route>
      <Route exact path="/">
        <HomeLoggedOut />
      </Route>
      <Route exact path='/github' component={() => {
        window.location.href = 'https://github.com/Spiro-001/';
        return null;
        }
      }>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
