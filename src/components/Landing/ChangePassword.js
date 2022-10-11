import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editDirectorpassword } from '../../store/actions/DirectorAction'

class ChangePassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      oldpassword: '',
      password: '',
      confirmpassword :'',
      error:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
      const code ={
          oldpassword :this.state.oldpassword,
                    password :this.state.password
                }
    if (this.state.password !== this.state.confirmpassword) {
        alert("Passwords don't match");
        
    } else {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.editDirectorpassword(code, id);
    this.state.oldpassword="";
    this.state.password="";
    this.state.confirmpassword="";
    }
  }

  render() {
    return (

      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit} >

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Update Your Password </h2>

              <input type="password" id="oldpassword" class="fadeIn second" name="oldpassword" placeholder="Enter Your Old Password"  onChange={this.handleChange} value={this.state.oldpassword} />
              <input type="password" id="password" class="fadeIn third" name="password" placeholder="Enter Your New Password" onChange={this.handleChange}  value={this.state.password} />
              <input type="password" id="confirmpassword" class="fadeIn third" name="confirmpassword" placeholder="Confirm Your Password" onChange={this.handleChange}  value={this.state.confirmpassword}/>            
              <input class="btn btn-primary" type="submit" value="Save" />
               


            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      directorResponse: state.director.directorResponse
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        editDirectorpassword: (credentials, id) => dispatch(editDirectorpassword(credentials, id))
  
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
