import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Home } from './Profs/Home';
import { Class } from './Profs/Class';
import { Assign } from './Profs/Assign';
import { Courses } from './Profs/Courses';
import { Exams } from './Profs/Exams';
import { MAssign } from './Profs/MAssign';
import { Subm } from './Profs/Subm';
import { Addcourse } from './Profs/Addcourse';
import { MCourses } from './Profs/MCourses';
import { Assigndoc } from './Profs/Assigndoc';
import { Addassign } from './Profs/Addassign';
import { Coursedoc } from './Profs/Coursedoc';
import { Assignres } from './Profs/Assignres';
import { Library } from './Landing/Library';
import { NLibrary } from './Landing/NLibrary';
import { Libraryprof } from './Landing/Libraryprof';
import './App.css';
class Prof extends Component {

    render() {
        return ( <
            React.Fragment >
            <
            Router >
            <
            div >
            <
            div className = "header-area " >

            <
            div id = "sticky-header"
            className = "main-header-area" >
            <
            div className = "container-fluid" >
            <
            div className = "row" >
            <
            div className = "col-lg-12" >
            <
            div className = "header_wrap d-flex justify-content-between align-items-center" >
            <
            div className = "header_left" >
            <
            div className = "logo" >
            <
            Link to = "/Landing" >
            <
            img src = "img/logo.png"
            alt = "" / >
            <
            /Link> <
            /div> <
            /div> <
            div className = "header_right d-flex align-items-center" >
            <
            div className = "main-menu  d-none d-lg-block" >
            <
            nav >
            <
            ul id = "navigation" >
            <
            li > < Link to = "/Home" > Principal < /Link></li >

            <
            li > < Link to = "Assign" > Assignements < /Link>

            <
            /li> <
            li > < Link to = "Courses" > Courses < /Link>

            <
            /li> <
            li > < Link to = "Exams" > Exams < /Link>

            <
            /li> <
            li > < Link to = "Class" > Student < /Link>

            <
            /li>

            <
            li > < Link to = "Library" > Library < /Link></li >
            <
            li > < Link to = "#" > Log Out < i className = "ti-angle-down" > < /i></Link >
            <
            ul className = "submenu" >
            <
            li > < Link to = "Event.html" > Help < /Link></li >

            <
            li > < Link to = "Admissions.html" > Settings < /Link></li >
            <
            li > < Link to = "elements.html" > Exit < /Link></li >
            <
            /ul> <
            /li> <
            /ul> <
            /nav> <
            /div>

            <
            /div> <
            /div> <
            /div> <
            div className = "col-12" >
            <
            div className = "mobile_menu d-block d-lg-none" > < /div> <
            /div> <
            /div> <
            /div> <
            /div>



            <
            Switch >
            <
            Route path = "/Home"
            component = { Home }
            /> <
            Route path = "/Assign"
            component = { Assign }
            /> <
            Route path = "/Exams"
            component = { Exams }
            /> <
            Route path = "/Courses"
            component = { Courses }
            /> <
            Route path = "/Class"
            component = { Class }
            /> <
            Route path = "/Addcourse"
            component = { Addcourse }
            /> <
            Route path = "/Coursedoc"
            component = { Coursedoc }
            /> <
            Route path = "/MCourses"
            component = { MCourses }
            /> <
            Route path = "/Addassign"
            component = { Addassign }
            /> <
            Route path = "/MAssign"
            component = { MAssign }
            /> <
            Route path = "/Library"
            component = { Library }
            /> <
            Route path = "/Libraryprof"
            component = { Libraryprof }
            /> <
            Route path = "/Assignres"
            component = { Assignres }
            /> <
            Route path = "/Assigndoc"
            component = { Assigndoc }
            /> <
            Route path = "/NLibrary"
            component = { NLibrary }
            /> <
            Route path = "/Subm"
            component = { Subm }
            /> <
            Redirect to = {
                {
                    pathname: "/Home",
                    history: { from: Prof }
                }
            }
            /> <
            /Switch>


            <
            /div> <
            /div>


            <
            /Router> <
            /React.Fragment>
        );
    }
}
export default Prof;