import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Deals from "./Components/Deals/Deals";
import Orders from "./Components/Orders/Orders";
import AddBooks from "./Components/AddBooks/AddBooks";
import ManageBooks from "./Components/ManageBooks/ManageBooks";
import EditBooks from "./Components/EditBooks/EditBooks";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/addBooks">
            <AddBooks />
          </Route>
          <Route path="/manageBooks">
            <ManageBooks />
          </Route>
          <Route path="/editBooks/:id">
            <EditBooks />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
