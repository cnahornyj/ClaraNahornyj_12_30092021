import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./views/Profile";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/:id" component={Profile} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
