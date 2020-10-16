import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AddService from './Components/AddService/AddService';
import ServicesList from './Components/ServicesList/ServicesList';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Order from './Components/Order/Order';
import UserServiceList from './Components/UserServiceList/UserServiceList';
import Review from './Components/Review/Review';

import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />

            </Route>
            <Route path="/login">

              <Login />
            </Route>
            <Route path="/servicelist" component={ServicesList} />
            <Route path="/addservice" component={AddService} />
            <Route path="/makeadmin" component={MakeAdmin} />
            {/* <Route path="/order" component={Order} /> */}
            <Route path="/userservicelist" component={UserServiceList} />
            <Route path="/review" component={Review} />
            <PrivateRoute path="/order/:title">
              <Order />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
