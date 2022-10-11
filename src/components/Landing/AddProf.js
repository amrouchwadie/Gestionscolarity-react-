import './Archive.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProfessorUser } from '../../store/actions/ProfessorAction'


export class AddProf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            profile_image: '',
            telephone: '',
            email: '',
            type: '',
            password: ''
        }
    }
    getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit button has been clicked")
        console.log(this.state);
        this.props.addProfessorUser(this.state);
    }
    fileTransform = (e) => {
        this.getBase64(e.target.files[0], (base64String) => {
            this.state.profile_image = base64String;
            console.log(this.state)
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { professorResponse } = this.props;
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit} >

                    <div class="wrapper fadeInDown">
                        <div id="formContent">

                            <h2 class="active"> Assign Professors </h2>


                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip01">First name</label>
                                    <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name" value={this.state.firstname}
                                        onChange={this.handleChange} required />
                                    <div className="valid-tooltip">
                                        Looks good!
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip02">Last name</label>
                                    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last name" value={this.state.lastname}
                                        onChange={this.handleChange} required />
                                    <div className="valid-tooltip">
                                        Looks good!
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltipUsername">Telephone</label>
                                    <div className="input-group">

                                        <input type="text" name="telephone" className="form-control" id="telephone" placeholder="+212 641415963" value={this.state.telephone}
                                            onChange={this.handleChange} required />
                                        <div className="invalid-tooltip">
                                            Please choose a unique and valid Phone.
        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip03">E-mail</label>
                                    <input type="text" name="email" className="form-control" id="email" placeholder="email@domaine.com" value={this.state.email}
                                        onChange={this.handleChange} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid city.
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip04">Domain</label>
                                    <input type="text" name="type" className="form-control" id="type" placeholder="Domain" value={this.state.type}
                                        onChange={this.handleChange} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid state.
      </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationTooltip05">Password</label>
                                    <div class="input-group">
                                        <input type="password" name="password" className="form-control" id="password" placeholder="password" value={this.state.password}
                                            onChange={this.handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <input type="file" id="photo" onChange={this.fileTransform} />
                            <div id="formFooter">


                                <button type="submit" class="btn btn-primary" classNameName="submit" >Submit</button>
                                <b>{professorResponse != null ? professorResponse : null}</b>
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
        addProfessorUser: (creds) => dispatch(addProfessorUser(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        professorResponse: state.professor.professorResponse
    }
}
const style = {
    display: 'flex',
    justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(AddProf)
