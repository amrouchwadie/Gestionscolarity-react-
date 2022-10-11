import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import Sidebar2 from '../layout/dashboard/Sidebar2'
import {Switch,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {resetAuthResponsePerComponent} from '../store/actions/AuthAction'
import Home from './Profs/Home';
import {Class} from './Profs/Class';
import Assign from './Profs/Assign';
import Courses from './Profs/Courses';
import {Exams} from './Profs/Exams';
import {MAssign} from './Profs/MAssign';
import {Subm} from './Profs/Subm';
import  Addcourse from './Profs/Addcourse';
import MCourses from './Profs/MCourses';
import Assigndoc from './Profs/Assigndoc';
import Addassign from './Profs/Addassign';
import {Coursedoc} from './Profs/Coursedoc';
import Assignres from './Profs/Assignres';
import Courseres from './Profs/Courseres';
import  Library from './Profs/Library';
import NLibrary from './Profs/NLibrary';
import Libraryprof from './Profs/Libraryprof';
import ProfileDirector from './Profs/ProfileDirector';
import Mlibrary from './Profs/Mlibrary';
import Adddocument from './Profs/Adddocument';
import GereCourse from './Profs/GereCourse';
import UpdateProfile from './Profs/UpdateProfile';
import ChangePassword from './Profs/ChangePassword';



const Dashboardprofessor = (props)=>{
      const dispatch = useDispatch();

    useEffect(() => {
      dispatch(resetAuthResponsePerComponent())
    }, [dispatch])


  return (
      <div>
    
   <Sidebar2 props={props}/><br/><br/>
   <div >

         <div style={{marginLeft: "250px"}}>
           <div >
        <Switch>
            <Route exact path={`${props.match.path}/Addassign`} component={Addassign} />
            <Route exact path={`${props.match.path}/MAssign`} component={MAssign} />
            <Route exact path={`${props.match.path}/Assignres/:id`} component={Assignres} />
            <Route exact path={`${props.match.path}/Courseres/:id`} component={Courseres} />
            <Route exact path={`${props.match.path}/Assigndoc/:id`} component={Assigndoc} />
            <Route exact path={`${props.match.path}/NLibrary`} component={NLibrary} />
            <Route exact path={`${props.match.path}/Library`} component={Library} />
            <Route exact path={`${props.match.path}/Libraryprof/:id`} component={Libraryprof} />
            <Route exact path={`${props.match.path}/Addassign`} component={Addassign} />
            <Route exact path={`${props.match.path}/MCourses/:id`} component={MCourses} />
            <Route exact path={`${props.match.path}/Coursedoc`} component={Coursedoc} />
            <Route exact path={`${props.match.path}/Addcourse`} component={Addcourse} />
            <Route exact path={`${props.match.path}/Class`} component={Class} />
            <Route exact path={`${props.match.path}/Courses`}  component={Courses} />
            <Route exact path={`${props.match.path}/Exams`} component={Exams} />
            <Route exact path={`${props.match.path}/Assign`} component={Assign} />
            <Route exact path={`${props.match.path}/Home`} component={Home} />
            <Route exact path={`${props.match.path}/Subm`} component={Subm} />
            <Route exact path={`${props.match.path}/ProfileDirector`} component={ProfileDirector} />
            <Route exact path={`${props.match.path}/Mlibrary/:id`} component={Mlibrary} />
            <Route exact path={`${props.match.path}/Adddocument/:id`} component={Adddocument} />
            <Route exact path={`${props.match.path}/GereCourse`} component={GereCourse} />
            <Route exact path={`${props.match.path}/UpdateProfile/:id`} component={UpdateProfile} />
            <Route exact path={`${props.match.path}/ChangePassword/:id`} component={ChangePassword} />
            

    </Switch>
        
    </div>
    </div>
    </div>
         </div>
  );
}

Dashboardprofessor.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};





export default Dashboardprofessor;