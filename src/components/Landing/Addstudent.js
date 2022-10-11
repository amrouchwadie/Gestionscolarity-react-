import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudentUser } from '../../store/actions/StudentAction'
import axios from 'axios';



class Addstudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code_std: '',
      firstname_std: '',
      code_niveau: '',
      lastname_std: '',
      profile_image: '',
      telephone_std: '',
      code_filiere:'',
      password: '',
      Niveaus:[],
      Filiere:[],
      email_std: ''

    }

  }
  
  componentDidMount = () => {
      axios.get('http://127.0.0.1:8000/api/indexfiliere')
      .then(response => {
        this.setState({ Filiere: response.data.data });
        console.log(response.data)
        console.log(this.state.Filiere)

      });
  }
  getnameniveau = (e,id)=>{
    axios.get('http://127.0.0.1:8000/api/getniveau/'+id)
      .then(response => {
        this.setState({ Niveaus: response.data.data });
        console.log(response.data)

      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }

  fileTransform = (e) => {
    this.getBase64(e.target.files[0], (base64String) => {
      this.state.profile_image = base64String;
      console.log(this.state)
    })
  }
  handleSubmit = (e) => {
    const studentt={
      code_std : this.state.code_std,
      code_filiere : this.state.code_filiere,
      email_std:this.state.email_std,
      firstname_std : this.state.firstname_std,
      lastname_std:this.state.lastname_std,
      telephone_std:this.state.telephone_std,
      password : this.state.password,
      profile_image:this.state.profile_image,
      code_niveau:this.state.code_niveau
    }
    e.preventDefault();
    console.log(this.state);
    this.props.addStudentUser(studentt)
  }

  render() {
    const { studentResponse } = this.props;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Add New Student </h2>

              <div class="form-group">
                <div class="form-group col-md-14">
                  <label for="inputAddress">Student Code</label><br/>
                  <input type="text" class="form-control" id="code_std" name="code_std" placeholder="Enter Student Code" onChange={this.handleChange} required />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Student FirstName</label>
                  <input type="text" class="form-control" id="firstname_std" name="firstname_std" placeholder="Enter Student FirstName" onChange={this.handleChange} required />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Student lastName</label>
                  <input type="text" class="form-control" id="lastname_std" name="lastname_std" placeholder="Enter Student LastName" onChange={this.handleChange} required />
                </div>
              </div>
              <div class="form-row">
              <div class="form-group col-md-6">
                  <label for="inputEmail4">Student Email</label><br/>
                  <input type="email" class="form-control" id="email_std" name="email_std" placeholder="Enter Student Email" onChange={this.handleChange} required />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Student Password</label>
                  <input type="password" class="form-control" id="password" name="password" placeholder="Enter Student Password" onChange={this.handleChange} required />
                </div>
              </div>
              <div class="form-row">
              <div class="form-group col-md-6">
                  <label for="inputEmail4">Branch Name</label>
                  <select type="none" className="custom-select" id="code_filiere" name="code_filiere" onChange={this.handleChange} onClick={(e) => this.getnameniveau(e, this.state.code_filiere)} required >
                  <option></option>
                  {this.state.Filiere.map(data2 => {
                                return (
                                    <option value={data2.id}>{data2.name_filiere}</option>
                                );
                            })
                            }
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Year Name</label>
                  
                  <select type="none" className="custom-select" id="code_niveau" name="code_niveau" onChange={this.handleChange} required >
                  <option></option>
                  {this.state.Niveaus.map(data3 => {
                                return (
                                    <option value={data3.id}>{data3.name_niveau}</option>
                                );
                            })
                            }
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Student Phone</label>
                  <input type="text" class="form-control" id="telephone_std" name="telephone_std" placeholder="Enter Student Phone" onChange={this.handleChange} required />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputAddress2">Upload picture</label>
                  <input type="file" id="photo" onChange={this.fileTransform} />

                </div>
              </div>
              <button type="submit" class="btn btn-primary" classNameName="submit"> <h4> Submit </h4> </button>
              <b>{studentResponse != null ? studentResponse : null}</b>
              <div class="form-group col-md-6">
              </div>
            </div>

          </div>
        </form>

      </div>
    )
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    addStudentUser: (creds) => dispatch(addStudentUser(creds)),

  }
}

const mapStateToProps = (state) => {
  return {
    studentResponse: state.student.studentResponse
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(Addstudent)