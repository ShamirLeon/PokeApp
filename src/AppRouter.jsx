import { Route, Router, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import FavsPage from "./pages/FavoritesPage";

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
