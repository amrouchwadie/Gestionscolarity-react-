import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import './App.css';
import home from './components/home';
import dashboard from './components/dashboard'
import dashboardprofessor from './components/dashboardprofessor'
import {PrivateRoute} from './components/PrivateRoute'
import dashboardstudent from './components/dashboardstudent'

class App extends Component {
  render(){
  return (

    <React.Fragment>
        <Router>

        <Switch>
            <Route exact path="/" component={home} />
            <Route path="/home" component={home} />          
            <PrivateRoute path="/dashboard" component={dashboard} />
            <PrivateRoute path="/dashboardprofessor" component={dashboardprofessor} />
            <PrivateRoute path="/dashboardstudent" component={dashboardstudent} />

            </Switch>

        </Router>
  </React.Fragment>
  );
  }
}

export default App;



