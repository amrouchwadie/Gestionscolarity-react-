import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editStudentUser } from '../../store/actions/StudentAction'
import DefaultImg from '../../image/default-img.png'
import axios from 'axios';

class MStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname_std: '',
      lastname_std: '',
      profile_image: '',
      telephone_std: '',
      code_niveau: '',
      file_directory: '',
      new_image: '',
      code_filiere: '',
      idniveau: '',
      name: '',
      Filiere: [],
      Niveaus: [],
      namefiliere: '',
      idfiliere: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
    axios.get('http://127.0.0.1:8000/api/indexfiliere')
      .then(response => {
        this.setState({ Filiere: response.data.data });
        console.log(response.data)

      });
    axios.get('http://127.0.0.1:8000/api/getnameyear/' + id)
      .then(response => {
        this.setState({
          name: response.data.name_niveau,
          idniveau: response.data.id
        });

      });
    axios.get('http://127.0.0.1:8000/api/getfiliere/' + id)
      .then(response => {
        this.setState({
          namefiliere: response.data.name_filiere,
          idfiliere: response.data.id
        });
        console.log(response.data)
      });

  }
  getnameniveau = (e, id) => {
    axios.get('http://127.0.0.1:8000/api/getniveau/' + id)
      .then(response => {
        this.setState({ Niveaus: response.data.data });
        console.log(response.data)

      });
  }
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleStudents !== this.props.loadSingleStudents) {
      let singleData = this.props.loadSingleStudents;
      this.setState({
        firstname_std: singleData.data.firstname_std,
        lastname_std: singleData.data.lastname_std,
        new_image: singleData.data.photo,
        telephone_std: singleData.data.telephone_std,
        code_niveau: singleData.data.code_niveau,
        code_filiere: singleData.data.code_filiere,
        file_directory: singleData.file_directory
      })
    }
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
    e.preventDefault();
    const { id } = this.props.match.params;
    console.log(this.state);

    this.props.editStudentUser(this.state, id);
  }



  render() {
    const { studentResponse } = this.props;
    return (
      <div>
        <form class="needs-validation" novalidate autoComplete="off" onSubmit={this.handleSubmit} >
          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Update Student </h2>


              <div class="form-group">
                <div className="form-group mb-4">
                  <label for="validationTooltip01">First name</label><br />
                  <input type="text" className="form-control" name="firstname_std" id="firstname_std" placeholder="First name"
                    onChange={this.handleChange} value={this.state.firstname_std || ''} required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group mb-4">
                  <label for="validationTooltip02">Last name</label><br />
                  <input type="text" className="form-control" name="lastname_std" id="lastname_std" placeholder="Last name"
                    onChange={this.handleChange} value={this.state.lastname_std || ''} required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
                <div className="form-group mb-4">
                  <label for="validationTooltipUsername">Telephone</label><br/>
                  <input type="text" name="telephone_std" className="form-control" id="telephone_std" placeholder="+212 641415963"
                    onChange={this.handleChange} value={this.state.telephone_std || ''} required />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid Phone.
        </div>
                </div>
              </div>
              <div className="form-row">

                <div class="form-group col-md-6">
                  <label for="inputEmail4">Branch Name</label>
                  <select type="none" className="custom-select" id="code_filiere" name="code_filiere" onChange={this.handleChange} onClick={(e) => this.getnameniveau(e, this.state.code_filiere)} required >
                    <option value={this.state.idfiliere}>{this.state.namefiliere}</option>
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
                    <option value={this.state.idniveau}>{this.state.name}</option>
                    {this.state.Niveaus.map(data2 => {
                      return (
                        <option value={data2.id}>{data2.name_niveau}</option>
                      );
                    })
                    }
                  </select>
                </div>



              </div>




              <input type="file" id="photo" onChange={this.fileTransform} />
              {
                <div>
                  {
                    this.state.new_image == "" ?
                      <img src={DefaultImg} className="image-restyle" />
                      : <img className="image-restyle" src={this.state.file_directory + "/" + this.state.new_image} />
                  }

                </div>
              }

              <div id="formFooter">
                <input class="btn btn-primary" type="submit" value="Save" />
                <b>{studentResponse != null ? studentResponse : null}</b>

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
    loadSingleStudents: state.student.loadSingleStudents,
    studentResponse: state.student.studentResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editStudentUser: (credentials, id) => dispatch(editStudentUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MStudent)