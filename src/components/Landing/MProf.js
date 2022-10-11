import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editProfessorUser } from '../../store/actions/ProfessorAction'
import DefaultImg from '../../image/default-img.png'

class MProf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      profile_image: '',
      telephone: '',
      email: '',
      type: '',
      file_directory: '',
      new_image: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleProfessors !== this.props.loadSingleProfessors) {
      let singleData = this.props.loadSingleProfessors;
      this.setState({
        firstname: singleData.data.firstname,
        lastname: singleData.data.lastname,
        new_image: singleData.data.photo,
        telephone: singleData.data.telephone,
        email: singleData.data.email,
        type: singleData.data.type,
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

    this.props.editProfessorUser(this.state, id);
  }



  render() {
    const { professorResponse } = this.props;
    return (
      <div>
        <form class="needs-validation" novalidate autoComplete="off" onSubmit={this.handleSubmit} >
          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Assign Professor </h2>


              <div class="form-row">
                <div className="form-group mb-6">
                  <label for="validationTooltip01">First name</label>
                  <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name" 
                    onChange={this.handleChange} value={this.state.firstname || ''} required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
                <div className="form-group mb-6">
                  <label for="validationTooltip02">Last name</label>
                  <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last name" 
                    onChange={this.handleChange} value={this.state.lastname || ''} required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
                
              <div className="form-row">
              <div className="form-group mb-6">
                  <label for="validationTooltipUsername">Telephone</label>

                    <input type="text" name="telephone" className="form-control" id="telephone" placeholder="+212 641415963" 
                      onChange={this.handleChange} value={this.state.telephone || ''} required />
                    <div className="invalid-tooltip">
                      Please choose a unique and valid Phone.
        </div>
                  </div>
              </div>
                <div className="form-group mb-6">
                  <label for="validationTooltip04">Domain</label>
                  <div className="input-group">

                  <input type="text" name="type" className="form-control" id="type" placeholder="Domain" 
                    onChange={this.handleChange} value={this.state.type || ''} required />
                  <div className="invalid-tooltip">
                    Please provide a valid state.
      </div>
                </div>
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
                <b>{professorResponse != null ? professorResponse : null}</b>

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
    loadSingleProfessors: state.professor.loadSingleProfessors,
    professorResponse: state.professor.professorResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editProfessorUser: (credentials, id) => dispatch(editProfessorUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MProf)