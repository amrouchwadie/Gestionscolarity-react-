import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserLogin, resetAuthResponsePerComponent } from '../../store/actions/AuthAction'
import './Login.css'
import {LoginUser} from '../../store/services/AuthService'


class Login extends Component {


  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      type1:'admin',
      type2:'professor',
      type3:'student'
    }
  }

  componentDidMount = () => {
    this.props.resetAuthResponsePerComponent();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('ready to log a user in')
    console.log(this.state)
    const user1 = {
        email: this.state.email,
        password: this.state.password,
        type:this.state.type1
    }
    const user2 = {
        email: this.state.email,
        password: this.state.password,
        type:this.state.type2
    }
    const user3 = {
      email: this.state.email,
      password: this.state.password,
      type:this.state.type3
  }

     
    LoginUser(user1).then((res)=>{
        console.log(res);
        if(res.success==true){
           localStorage.setItem("user",'Bearer '+res.token);
           setTimeout(() => {
            this.props.history.push(`/Dashboard/home`)

           }, 100);
           
       }else{
       }
   },
  
   error=>{
       console.log(error)
   }
   
   
    )
    LoginUser(user2).then((res)=>{
        console.log(res);
        if(res.success==true){
           localStorage.setItem("user",'Bearer '+res.token);
           setTimeout(() => {
            this.props.history.push(`/dashboardprofessor/Home`)

           }, 100);
           
       }else{
       }
   },
  
   error=>{
       console.log(error)
   }
   
   
    )
    LoginUser(user3).then((res)=>{
        console.log(res);
        if(res.success==true){
           localStorage.setItem("user",'Bearer '+res.token);
           
           setTimeout(() => {
            this.props.history.push(`/dashboardstudent/Home`)

           }, 100);
           
       }else{
       }
   },
  
   error=>{
       console.log(error)
   }
   
   
    )


  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { authResponse } = this.props;
    return (
      <div>
      <form  autoComplete="off" onSubmit={this.handleSubmit}>
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
          <div className="row d-flex">
              <div className="col-lg-6">
                  <div className="card1 pb-5">
                      <div className="row"> </div> <br /> <br /> <br /> <br />
                      <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://my.apprised.app/themes/apprised/assets/images/loginillustration.svg" className="image" /> </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="card2 card border-0 px-4 py-5">
                  <br />     <br />     <br />     <br />    
                      <div className="row px-3"> <label className="mb-1">
                              <h6 className="mb-0 text-sm">Email Address</h6>
                          </label> <input className="mb-4" type="email"  placeholder="Enter a valid email address"
                          id="email" name="email"
                          value={this.state.email}
                          onChange={this.handleChange} /> </div>
                          <div> <label className="mb-1">
                              <h6 className="mb-0 text-sm">Password</h6>
                          </label> <input className="mb-4" type="password"  placeholder="Enter password"
                          id="password" name="password"
                          value={this.state.password}
                          onChange={this.handleChange} /> </div>
                      
                      <div className="row px-3 mb-4">
                          <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                      </div>
                      <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                     
                  </div>
              </div>
          </div>
          <div className="bg-blue py-4">
              <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright 2020. All rights Wadie&Youssef.</small>
                  <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
              </div>
          </div>
      </div>
  </div>
  </form>
    </div>





         


    )
  }
}


const mapStateToProps = (state) => {
  return {
    authResponse: state.auth.authResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserLogin: (creds, history) => dispatch(UserLogin(creds, history)),
    resetAuthResponsePerComponent: () => dispatch(resetAuthResponsePerComponent()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)






