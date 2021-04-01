import React, { createContext, useState } from "react";
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
import ProceedCheckOut from "./Components/ProceedCheckOut/ProceedCheckOut";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/deals">
              <Deals />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/addBooks">
              <AddBooks />
            </PrivateRoute>
            <Route path="/manageBooks">
              <ManageBooks />
            </Route>
            <Route path="/editBooks/:id">
              <EditBooks />
            </Route>
            <PrivateRoute path="/selectBook/:id">
              <ProceedCheckOut />
            </PrivateRoute>
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

      </UserContext.Provider>
    </>
  );
}

export default App;
