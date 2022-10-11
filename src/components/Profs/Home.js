import React, { Component } from 'react'
import { BrowserRouter as  Router,Switch,Route, Link } from 'react-router-dom';
import axios from 'axios';




class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nbrstudent:'',
            nbrbook:'',
            nbryear:'',
            nbrdoc:'',
            nbrcourse:'',
            nbrassign:''        }
    }

    componentDidMount = () => {

        axios.get('http://127.0.0.1:8000/api/countStudent')
          .then(response => {
            this.setState({ nbrstudent : response.data });
            
          });
          axios.get('http://127.0.0.1:8000/api/countCourse')
          .then(response => {
            this.setState({ nbrcourse : response.data });
            
          });
          axios.get('http://127.0.0.1:8000/api/countAssign')
          .then(response => {
            this.setState({ nbrassign : response.data });
            
          });
          axios.get('http://127.0.0.1:8000/api/countBook')
          .then(response => {
            this.setState({ nbrbook : response.data });
            
          });
          axios.get('http://127.0.0.1:8000/api/countDocument')
          .then(response => {
            this.setState({ nbrdoc : response.data });
            
          });
          axios.get('http://127.0.0.1:8000/api/countNiveau')
          .then(response => {
            this.setState({ nbryear : response.data });
            
          });
    }

   
    render() {
        return (
            <div class="container">
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <div class="card-box bg-blue">
                <div class="inner">
                    <h3> {this.state.nbrstudent} </h3>
                    <p style={{color:"black",fontSize:"18px"}}> Student  </p>
                </div>
                <div class="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <a href="#" class="card-box-footer"></a>
            </div>
        </div>

        
        <div class="col-lg-4 col-sm-6">
            <div class="card-box bg-red">
                <div class="inner">
                    <h3> {this.state.nbrcourse} </h3>
                    <p style={{color:"black",fontSize:"18px"}}> Courses </p>
                </div>
                <div class="icon">
                    <i class="fa fa-sticky-note"></i>
                </div>
                <a href="#" class="card-box-footer"></a>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div class="card-box bg-warning ">
                <div class="inner">
                    <h3> {this.state.nbrassign} </h3>
                    <p style={{color:"black",fontSize:"18px"}}> Assignement </p>
                </div>
                <div class="icon">
                    <i class="fa fa-book"></i>
                </div>
                <a href="#" class="card-box-footer"></a>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card-box bg-success">
                <div class="inner">
                    <h3> {this.state.nbrdoc} </h3>
                    <p style={{color:"black",fontSize:"18px"}}> Courses Documents </p>
                </div>
                <div class="icon">
                    <i class="fas fa-layer-group"></i>
                </div>
                <a href="#" class="card-box-footer"></a>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card-box bg-secondary ">
                <div class="inner">
                    <h3> {this.state.nbrbook} </h3>
                    <p style={{color:"black",fontSize:"18px"}}> Library </p>
                </div>
                <div class="icon">
                    <i class="fas fa-layer-group"></i>
                </div>
                <a href="#" class="card-box-footer"></a>
            </div>
        </div>
    </div>
</div>
        )
    }
}


  
  export default Home