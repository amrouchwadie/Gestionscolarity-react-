import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../layout/dashboard/Sidebar'
import Sidebar3 from '../layout/dashboard/Sidebar3'
import {Switch,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {resetAuthResponsePerComponent} from '../store/actions/AuthAction'
import Profil from './Profile'
import Contact from './Landing/Contact';
import Archive from './Landing/Archive';
import Profile from './Landing/Profile';
import Student from './Landing/Student';
import  AddNiveau from './Landing/AddNiveau';
import  AddProf from './Landing/AddProf';
import  Branchniveau from './Landing/Branchniveau';
import  Library from './Landing/Library';
import Addstudent from './Landing/Addstudent';
import  VAdmin from './Landing/VAdmin';
import  Addstaf from './Landing/Addstaf';
import  Mniveau from './Landing/Mniveau';
import Mbranch from './Landing/Mbranch';
import MProf from './Landing/MProf';
import MStudent from './Landing/MStudent';
import  MStaff from './Landing/MStaff';
import  NLibrary from './Landing/NLibrary';
import  AddModule from './Landing/AddModule';
import  NiveauModule from './Landing/NiveauModule';
import  ProfileDirector from './Landing/ProfileDirector';
import  Mmodule from './Landing/Mmodule';
import {Subprof} from './Landing/Subprof';
import  AllModule from './Landing/AllModule';
import  AllNiveau from './Landing/AllNiveau';
import Libraryprof from './Landing/Libraryprof';
import   UpdateProfile from './Landing/UpdateProfile';
import  ChangePassword from './Landing/ChangePassword';
import  ProfileStudent from './Landing/ProfileStudent';
import  Mlibrary from './Landing/Mlibrary';


const Dashboard = (props)=>{
      const dispatch = useDispatch();

    useEffect(() => {
      dispatch(resetAuthResponsePerComponent())
    }, [dispatch])


  return (
      <div>
    
   <Sidebar props={props}/>
   <br/><br/>
         <div className="main-content">
        <div id="viewport">
        <Switch>
            <Route exact path={`${props.match.path}/home`}  component={Profil} />
            <Route exact path={`${props.match.path}/Contact`} component={Contact} />
            <Route exact path={`${props.match.path}/Archive`} component={Archive} />
            <Route exact path={`${props.match.path}/Profile`} component={Profile} />
            <Route exact path={`${props.match.path}/Student`} component={Student} />
            <Route exact path={`${props.match.path}/AddProf`} component={AddProf} />
            <Route exact path={`${props.match.path}/Library`} component={Library} />
            <Route exact path={`${props.match.path}/Addstudent`} component={Addstudent} />
            <Route exact path={`${props.match.path}/VAdmin`} component={VAdmin} />
            <Route exact path={`${props.match.path}/Addstaf`} component={Addstaf} />
            <Route exact path={`${props.match.path}/Mbranch/:id`} component={Mbranch} />
            <Route exact path={`${props.match.path}/MProf/:id`}  component={MProf} />
            <Route exact path={`${props.match.path}/MStudent/:id`} component={MStudent} />
            <Route exact path={`${props.match.path}/Branchniveau/:id`} component={Branchniveau} />
            <Route exact path={`${props.match.path}/MStaff/:id`} component={MStaff} />
            <Route exact path={`${props.match.path}/NLibrary`} component={NLibrary} />
            <Route exact path={`${props.match.path}/Subprof`} component={Subprof} />
            <Route exact path={`${props.match.path}/AddNiveau/:id`} component={AddNiveau} />
            <Route exact path={`${props.match.path}/Mniveau/:id`}  component={Mniveau} />
            <Route exact path={`${props.match.path}/AddModule/:id`} component={AddModule} />
            <Route exact path={`${props.match.path}/NiveauModule/:id`} component={NiveauModule} />
            <Route exact path={`${props.match.path}/Mmodule/:id`} component={Mmodule} />
            <Route exact path={`${props.match.path}/AllModule`} component={AllModule} />
            <Route exact path={`${props.match.path}/AllNiveau`} component={AllNiveau} />
            <Route exact path={`${props.match.path}/Libraryprof/:id`} component={Libraryprof} />           
            <Route exact path={`${props.match.path}/ProfileDirector`} component={ProfileDirector} />
            <Route exact path={`${props.match.path}/UpdateProfile/:id`} component={UpdateProfile} />
            <Route exact path={`${props.match.path}/ChangePassword/:id`} component={ChangePassword} />
            <Route exact path={`${props.match.path}/ProfileStudent/:id`} component={ProfileStudent} />
            <Route exact path={`${props.match.path}/Mlibrary/:id`} component={Mlibrary} />
        
            
            
    </Switch>
    </div>

         </div>
      
      </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};





export default Dashboard;