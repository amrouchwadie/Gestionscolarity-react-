import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import './Profilestudent.css';
import { connect } from 'react-redux'
import { loadSingleprofile } from '../../store/actions/StudentAction'
import axios from 'axios';
class ProfileStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            code_std: '',
            firstname_std: '',
            lastname_std: '',
            profile_image: '',
            telephone_std: '',
            email_std: '',
            name_filiere: '',
            name_niveau: '',
            file_directory: '',
            new_image: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props);
        const { id } = this.props.match.params;
        this.props.loadSingleprofile(id);
        axios.get('http://127.0.0.1:8000/api/getexactnamefiliere/' + id)
            .then(response => {
                this.setState({ name_filiere: response.data.name_filiere });


            });
        axios.get('http://127.0.0.1:8000/api/getexactnameniveau/' + id)
            .then(response => {
                this.setState({ name_niveau: response.data.name_niveau });


            });
    }
    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.loadSingleStudents !== this.props.loadSingleStudents) {
            let singleData = this.props.loadSingleStudents;
            this.setState({
                firstname_std: singleData.data.firstname_std,
                code_std: singleData.data.code_std,
                lastname_std: singleData.data.lastname_std,
                new_image: singleData.data.photo_std,
                telephone_std: singleData.data.telephone_std,
                email_std: singleData.data.email_std,
                id: singleData.data.id,

                file_directory: singleData.file_directory
            })
        }
        console.log(this.state);
    }



    render() {
        return (
            <div>

                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={this.state.file_directory + "/" + this.state.new_image} alt="" />

                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                    <input name_niveau="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {this.state.firstname_std + " " + this.state.lastname_std}
                                    </h5>
                                    <p class="proile-rating">STUDENT : <span>{this.state.name_filiere}</span></p>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" /*data-toggle="tab"*/ href="#home" role="tab" /*aria-controls="home" aria-selected="true" */>About</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <Link to="#" className="boxed-btn5" id="pic"></Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-work">

                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" /*aria-labelledby="home-tab"*/>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>First Name</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.firstname_std}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>Last Name</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.lastname_std} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>email_std</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.email_std}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>Phone</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.telephone_std}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>Student Code</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.code_std}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>Student Branch</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.name_filiere}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p style={{ color: "black" }}>Student Year</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.name_niveau}</p>
                                            </div>
                                        </div>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadSingleStudents: state.student.loadSingleStudents,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSingleprofile: (id) => dispatch(loadSingleprofile(id)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileStudent)
