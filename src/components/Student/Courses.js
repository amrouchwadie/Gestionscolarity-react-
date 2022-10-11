import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import axios from 'axios';
import './style.css'

import { loadCourseStudent, loadSearchCourseprofessor } from '../../store/actions/CourseAction'

class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageRangeDisplayed: 10,
            search_content: "",
            name:''
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadCourseStudent(page);
    }
    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchCourseprofessor(this.state.search_content, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadCourseStudent(currentPage)
        } else {
            this.props.loadSearchCourseprofessor(this.state.search_content, currentPage)
        }

    }
   
    
    loadaddpagedocument = (e,id) => {
        this.props.history.push('/dashboardstudent/Courseres/'+id);
    }
    

    render() {
        const { loadCourses } = this.props;

        return (
            <div >
            <div class="container" >
                                <div class="col-sm-12">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h2> Course Detail</h2>
                                </div>
                                
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-12	">
                                <input id="search_content" type="search" placeholder="Search for Student"  onKeyUp={this.handleKeyUp} />
                            </div>

                        
            <div class="container">
        <div class="row">
        {loadCourses && loadCourses.hasOwnProperty('data') ? loadCourses.data.data.map(row => (
            <div class="col-lg-4 col-sm-8">
                <div class="card-box bg-blue">
                    <div class="inner">
                        <h3> {row.id} </h3>
                        <p> {row.title_course} </p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <Link to="#" class="card-box-footer" id={row.id} onClick={(e) => this.loadaddpagedocument(e, row.id)}>View More <i class="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
             ))
             : null
         } 
         <div>
            </div>             
        </div>
        <div className="d-flex justify-content-center">
                            {loadCourses ?
                                <Pagination
                                    activePage={loadCourses.data.current_page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={loadCourses.data.total}
                                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                                    onChange={this.onChange}
                                    itemClass='page-item'
                                    linkClass='page-link'
                                />

                                : null
                            }
                            
                        </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
                        </div>
)

}

}
const mapStateToProps = (state) => {
return {
	loadCourses: state.course.loadCourses
}
}


const mapDispatchToProps = (dispatch) => {
return {
	loadCourseStudent: (page) => dispatch(loadCourseStudent(page)),
	loadSearchCourseprofessor: (search_content, page) => dispatch(loadSearchCourseprofessor(search_content, page)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Courses)

