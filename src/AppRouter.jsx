import { Route, Router, Switch } from "wouter";
import HomePage from "./pages/home";
import FavsPage from "./pages/favs";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage}></Route>
        <Route path="/favs" component={FavsPage}></Route>
      </Switch>
    </Router>
  );
};
