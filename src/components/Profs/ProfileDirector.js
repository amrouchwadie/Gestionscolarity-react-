import React, { Component } from 'react'
import './settings.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadDirectorsProfile } from '../../store/actions/DirectorAction'

class ProfileDirector extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:'',
          firstname: '',
          lastname: '',
          profile_image: '',
          telephone: '',
          email: '',
          password:'',
          type: '',
          file_directory: '',
          new_image: ''
        }
      }

      componentDidMount = () => {
        console.log(this.props);
        let token = localStorage.getItem('user');

        this.props.loadDirectorsProfile(token);
        
      }
      loadEditpage = (e) => {
        this.props.history.push('/dashboardprofessor/UpdateProfile/'+ this.state.id);
    }
    loadchangepassword = (e) => {
        this.props.history.push('/dashboardprofessor/ChangePassword/'+ this.state.id);
    }
      componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.loadSingleDirectors !== this.props.loadSingleDirectors) {
          let singleData = this.props.loadSingleDirectors;
          this.setState({
            firstname: singleData.data.firstname,
            lastname: singleData.data.lastname,
            new_image: singleData.data.photo,
            telephone: singleData.data.telephone,
            email: singleData.data.email,
            id : singleData.data.id,
            password:"*************",
            type: singleData.data.type,
            file_directory: singleData.file_directory
          })
        }
        console.log(this.state);
      }
    
    
  
    render() {
      return (
  <div><br/>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-12 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img className="image-restyle" src={this.state.file_directory + "/" + this.state.new_image} /> </div>
                                <h6 class="f-w-600">{this.state.firstname +" "+this.state.lastname }</h6>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h3 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400" >{this.state.email }</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400">{this.state.telephone }</h6>
                                    </div>
                                </div>
                                <h3 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Type</p>
                                        <h6 class="text-muted f-w-400">{this.state.type }</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Password </p>
                                        <h6 class="text-muted f-w-400">{this.state.password }</h6>
                                        <br /> <br /> 
                                        
                                    </div>
                                    
                                </div>
                                <div class="row">
    <div class="col">
    
    </div>
    <div class="col">
     
    </div> <br />
   
    <div class="col">
    <br /> <br />
    <Link to="#" class="btn btn-primary btn-lg" tabindex="-1" role="button"  onClick={(e) => this.loadchangepassword(e)}> <h4 style={{color:"white"}} > Change Password</h4> </Link>
    
    </div> <br />
    <div class="col">
        <br /> <br />
    <Link to="#" class="btn btn-primary btn-lg" tabindex="-1" role="button"  onClick={(e) => this.loadEditpage(e)}> <h4 style={{color:"white"}} > Review Change </h4> </Link>
    </div>
  </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" ><i class="mdi mdi-facebook feather icon-facebook facebook" /*aria-hidden="true"*/></i></a></li>
                                    <li><a href="#!" ><i class="mdi mdi-twitter feather icon-twitter twitter" /*aria-hidden="true"*/></i></a></li>
                                    <li><a href="#!" ><i class="mdi mdi-instagram feather icon-instagram instagram" /*aria-hidden="true"*/></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </div>
      )
    }
  }
const mapStateToProps = (state) => {
    return {
      loadSingleDirectors: state.director.loadSingleDirectors,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        loadDirectorsProfile: () => dispatch(loadDirectorsProfile()),
  
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileDirector)
