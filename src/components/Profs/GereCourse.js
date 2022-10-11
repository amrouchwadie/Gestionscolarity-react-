import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import axios from 'axios';


import { loadCourseProfessor, loadSearchCourseprofessor, deleteCourseUser } from '../../store/actions/CourseAction'

class GereCourse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageRangeDisplayed: 3,
            search_content: "",
            name:''
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadCourseProfessor(page);
    }
    getNameModule = (id) =>{
        axios.get('http://127.0.0.1:8000/api/getnameNiveau/'+id)
          .then(response => {
            this.setState({ name : response.data.data });
            console.log(this.state.name)
          });
        
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
            this.props.loadCourseProfessor(currentPage)
        } else {
            this.props.loadSearchCourseprofessor(this.state.search_content, currentPage)
        }

    }
    loadaddpage = (e) => {
        this.props.history.push('/Dashboardprofessor/Addcourse');
    }
    loadaddpagedocument = (e,id) => {
        this.props.history.push('/dashboardprofessor/Courseres/'+id);
    }
    loadEditpage = (e, code) => {
        this.props.history.push('/Dashboardprofessor/Mniveau/'+code);
    }

    DeleteCourse = (e, code) => {
        const confirmDialog = window.confirm("are you sure you want to delete this course?");
        if (confirmDialog == true) {
            this.props.deleteCourseUser(code);
        } else {

        }
    }

    

    render() {
        const { loadCourses } = this.props;

        return (
            <div>
            <div className="container-xl">
               <div className="table-responsive">
                   <div className="table-wrapper">
                       <div className="table-title">
                       <Link className="btn btn-info"  role="button" onClick={(e) => this.loadaddpage()}><h4> 📘 Add New Course </h4></Link>
                           <div className="row">
                               
                           <div class="col-sm-12	">						
                               
                               <input type="search"  placeholder="Search for Course"  id="search_content" onKeyUp={this.handleKeyUp} />
           
                           </div>
                
                               
                             
                               
                           </div>
                       </div>
                       <table className="table table-striped table-hover table-bordered">
                           <thead>
                               <tr>
                                   <th>ID</th>
                                   <th>Name </th>
                                                                     
                                   <th>Actions</th>

                               </tr>
                           </thead>
                           <tbody>
                           {loadCourses && loadCourses.hasOwnProperty('data') ? loadCourses.data.data.map(row => (
               
                               <tr>
                                   <td>{row.id}</td>
                                   <td><a href="" id={row.id} onClick={(e) => this.loadaddpagedocument(e, row.id)} >{row.title_course}</a></td>
                                   <td>
                                  
                                   <td><a href="" id={row.id} onClick={(e) => this.loadEditpage(e, row.id)} ><i class="material-icons">✎</i></a></td>
                                    <td><Link to="" id={row.id} onClick={(e) => this.DeleteCourse(e, row.id)} ><i class="material-icons">🗑️</i></Link></td>

                                   </td>

                               </tr>
                                     ))
                                     : null
                                 }
                           </tbody>
                       </table>
                       <div className="d-flex justify-content-center">
                            {loadCourses ?
                                <Pagination
                                    activePage={loadCourses.data.current_page}
                                    itemsCountPerPage={3}
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
	loadCourseProfessor: (page) => dispatch(loadCourseProfessor(page)),
	loadSearchCourseprofessor: (search_content, page) => dispatch(loadSearchCourseprofessor(search_content, page)),
	deleteCourseUser: (code) => dispatch(deleteCourseUser(code))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(GereCourse)

