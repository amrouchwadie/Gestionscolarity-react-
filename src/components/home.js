import React from 'react';
import {Switch,Route,Router} from 'react-router-dom'
import Header from '../layout/home/Header'
import {Home} from './Index/Home';
import Login from './Index/Login';
import {Service} from './Index/Service';
import {AboutUS} from './Index/AboutUS';

const home = (props) => {
    console.log(props)
    return (
        <div>
        <Header props={props}/>
        <Switch>
    <Route exact path={props.match.path} component={Home} />
    <Route path={`${props.match.path}/Login`} component={Login} />
    <Route path={`${props.match.path}/Service`} component={Service} />
    <Route path={`${props.match.path}/AboutUS`} component={AboutUS} />

    </Switch>


        </div>
    );
}

export default home;