
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style2.css'
class Sidebar3 extends Component {

 
      render() {

        const logOut = () => {
            localStorage.removeItem('user');
            this.props.history.push('/');
        }
    

    return (
        <div >
           <nav class="navbar navbar-expand-xl navbar-light bg-light"> 
	<a href="#" class="navbar-brand"><i class="fa fa-cube"></i>Wiser<b>University</b></a>
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		<div class="navbar-nav">
			<Link to="/dashboardstudent/Home" class="nav-item nav-link active">Home</Link>
			<Link to="/dashboardstudent/courses" class="nav-item nav-link active" >Courses</Link>
            <Link to="/dashboardstudent/Assign" class="nav-item nav-link active">Assigenement</Link>
			<Link to="/dashboardstudent/Library" class="nav-item nav-link active">Library</Link>
            <Link to="#" class="nav-item nav-link active">Contact Us</Link>
		</div>
		<form class="navbar-form form-inline">
			<div class="input-group search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search by Name"/>
				<span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
			</div>
		</form>
		<div class="navbar-nav ml-auto">
			<a href="#" class="nav-item nav-link notifications"><i class="fa fa-bell-o"></i><span class="badge">1</span></a>
			<a href="#" class="nav-item nav-link messages"><i class="fa fa-envelope-o"></i><span class="badge">10</span></a>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Paula Wilson <b class="caret"></b></a>
				<div class="dropdown-menu">
					<a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
					<a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
					<a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
					<div class="dropdown-divider"></div>
					<a href="" class="dropdown-item" onClick={logOut}> Logout</a>
				</div>
			</div>
		</div>
	</div>
</nav>

        </div>


    );
    }
}

  
  
  export default Sidebar3
