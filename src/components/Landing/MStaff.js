import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editProfessorUser } from '../../store/actions/ProfessorAction'

class MStaff extends Component {
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
                    <form class="needs-validation" novalidate  autoComplete="off" onSubmit={this.handleSubmit} >
        <div class="wrapper fadeInDown">
          <div id="formContent">

            <h2 class="active"> Assign Professor </h2>


              <div class="form-row">
              <div className="col-md-4 mb-3">
                                    <label for="validationTooltip01">First name</label>
                                    <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name" value={this.state.firstname}
                                        onChange={this.handleChange} value = {this.state.firstname || ''} required />
                                    <div className="valid-tooltip">
                                        Looks good!
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip02">Last name</label>
                                    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last name" value={this.state.lastname}
                                        onChange={this.handleChange} value = {this.state.lastname || ''} required />
                                    <div className="valid-tooltip">
                                        Looks good!
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltipUsername">Telephone</label>
                                    <div className="input-group">

                                        <input type="text" name="telephone" className="form-control" id="telephone" placeholder="+212 641415963" value={this.state.telephone}
                                            onChange={this.handleChange} value = {this.state.telephone || ''} required />
                                        <div className="invalid-tooltip">
                                            Please choose a unique and valid Phone.
        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationTooltip03">E-mail</label>
                                    <input type="text" name="email" className="form-control" id="email" placeholder="email@domaine.com" value={this.state.email}
                                        onChange={this.handleChange} value = {this.state.email || ''} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid city.
      </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="validationTooltip04">Domain</label>
                                    <input type="text" name="type" className="form-control" id="type" placeholder="Domain"  value={this.state.type}
                                        onChange={this.handleChange} value = {this.state.type || ''} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid state.
      </div>
                                </div>
                            </div>
                           
                            {
    <div>
        {
      this.state.new_image == "" ?
      <img className="image-restyle" src={this.state.file_directory+"/"+this.state.new_image} />
       :null
        }
  
    </div>
}
                                <input type="file" id="photo" onChange={this.fileTransform} />


            <div id="formFooter">
              <input class="btn btn-primary" type="submit" value="Save" />
              <b>{professorResponse!=null?professorResponse:null}</b>

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


export default connect(mapStateToProps, mapDispatchToProps)(MStaff)