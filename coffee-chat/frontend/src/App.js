import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { CreateUserForm } from "./components/HomePageLogOut/CreateUserForm";
import { LoginForm } from "./components/HomePageLogOut/LoginForm";
import { Feed } from "./components/HomePageLogOut/Feed";
import { HomeLoggedOut } from "./components/HomePageLogOut/HomeLoggedOut";
import { UASLoginForm } from "./components/HomePageLogOut/UASLoginForm";
import { useEffect, useState } from "react";
import { IsLoadingForm } from "./loadinghtml/IsLoadingForm";
import { MainFeed } from "./components/FeedPage/MainFeed";
import { Provider, useSelector } from "react-redux";

export const App = () => {
  let firstSession = false;
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setIsLoading(true);
    if (history.location.pathname === '/' && isLoading) { // CONDITIONAL CSS :O <---
      setTimeout(() => {
          // import('./LoginFormUAS.css')
          // import('./UASLoginForm.css')
          // const loadingImage = document.createElement('img')
          // loadingImage.setAttribute('src','https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg')
          // document.getElementsByTagName('body')[0].insertBefore(loadingImage, document.getElementsByTagName('body')[0].children.item(0))
          setIsLoading(false);
      },1000)
    }
  },[])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/uas/login">
          <UASLoginForm />
        </Route>
        <Route exact path="/feed">
          <MainFeed />
        </Route>
        <Route exact path="/login">
          <UASLoginForm />
        </Route>
        <Route exact path="/signup">
          <CreateUserForm />
        </Route>
        <Route exact path="/">
          {isLoading && <IsLoadingForm />}
          {!isLoading && <HomeLoggedOut />}
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
