import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Donation from './component/Donation/Donation';
import Events from './component/Events/Events';
import Blog from './component/Blog/Blog';
import Error from './component/Error/Error';
import HomeContents from './component/HomeContents/HomeContents';
import TaskContent from './component/TaskContent/TaskContent';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import TaskList from './component/TaskList/TaskList';
import AddBulkData from './component/AddBulkData/AddBulkData';
import Admin from './component/Admin/Admin';
import Footer from './component/Footer/Footer';
export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:''
  });

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>    
        <Home />
         <Switch>
         <Route exact path="/">
            <HomeContents />
          </Route>
          <Route path="/donation">
            <Donation />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <PrivateRoute path="/taskList">
            <TaskList />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addAllTasks">
            <AddBulkData />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/yourTasks/:TaskID">
            <TaskContent></TaskContent>
          </PrivateRoute>
          
          <Route path="*">
            <Error />
          </Route>

        </Switch>
      <Footer></Footer>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;