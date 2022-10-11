import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import Sidebar3 from '../layout/dashboard/Sidebar3'
import {Switch,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {resetAuthResponsePerComponent} from '../store/actions/AuthAction'

import Assign from './Student/Assign';
import Assignres from './Student/Assignres';
import Home from './Student/Home';
import Libraryprof from './Student/Libraryprof';
import Library from './Student/Library';
import Courses from './Student/Courses';
import Courseres from './Student/Courseres';

const Dashboardstudent = (props)=>{
      const dispatch = useDispatch();

    useEffect(() => {
      dispatch(resetAuthResponsePerComponent())
    }, [dispatch])


  return (
      <div>
    
   <Sidebar3 props={props}/><br/>
   <div >

         <div>
           <div >
        <Switch>
        <Route exact path={`${props.match.path}/Courseres/:id`} component={Courseres} />
        <Route exact path={`${props.match.path}/Courses`}  component={Courses} />
        <Route exact path={`${props.match.path}/Library`} component={Library} />
        <Route exact path={`${props.match.path}/Libraryprof/:id`} component={Libraryprof} />
        <Route exact path={`${props.match.path}/Home`}  component={Home} />
        <Route exact path={`${props.match.path}/Assign`} component={Assign} />
        <Route exact path={`${props.match.path}/Assignres/:id`} component={Assignres} />
        

           

    </Switch>
        
    </div>
    </div>
    </div>
         </div>
  );
}

Dashboardstudent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};





export default Dashboardstudent;