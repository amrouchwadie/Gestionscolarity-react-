
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css'
import { connect } from 'react-redux'
import { loadDirectorsProfile } from '../../store/actions/DirectorAction'
class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            profile_image: '',
            telephone: '',
            email: '',
            password: '',
            type: '',
            file_directory: '',
            new_image: ''
        }
    }
    /* componentDidMount = async (prevProps, prevState) => {
       console.log(this.props);
       let token = localStorage.getItem('user');
       this.props.loadDirectorsProfile(token);     
     }*/
    /* componentDidUpdate = async (prevProps, prevState) => {
       if (prevProps.loadSingleDirectors !== this.props.loadSingleDirectors) {
         let singleData = this.props.loadSingleDirectors;
         console.log(singleData)
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
     }*/
    render() {


        const logOut = () => {
            localStorage.removeItem('user');
            this.props.history.push('/');
        }

        return (
            <div >
                <input type="checkbox" id="check" />
                <div class="wrapper">
                    <div class="header">
                        <div class="header-menu">
                            <div class="title">Wiser <span>University</span></div>

                            <ul>

                            </ul>

                            <div class="right_area" ><br />
                                <a href="" class="logout_btn" onClick={logOut}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sidebar">
                    <br />
                    <center>
                        <img src={this.state.file_directory + "/" + this.state.new_image} class="profile_image" alt="" />
                        <h4>{this.state.firstname + " " + this.state.lastname}</h4>
                    </center>

                    <Link to="/dashboard/home"><i class="fas fa-desktop"></i><span>Dashboard</span></Link>
                    <Link to="/dashboard/Profile"><i class="fas fa-cogs"></i><span>Branch</span></Link>
                    <Link to="/dashboard/Contact"><i class="fas fa-table"></i><span>Professor</span></Link>
                    <Link to="/dashboard/Student"><i class="fas fa-th"></i><span>Student</span></Link>
                    <Link to="/dashboard/VAdmin"><i class="fas fa-info-circle"></i><span>Administration</span></Link>
                    <Link to="/dashboard/Library"><i class="fas fa-info-circle"></i><span>Library</span></Link>
                    <Link to="/dashboard/ProfileDirector"><i class="fas fa-sliders-h"></i><span>Settings</span></Link>
                </div>


            </div>


        );
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


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
