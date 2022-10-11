import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import axios from 'axios';
import './style2.css'
import { connect } from 'react-redux'

import { loadAssignProfessor, loadSearchAssignprofessor, deleteAssignUser } from '../../store/actions/AssignAction'

class Assign extends Component {

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
        this.props.loadAssignProfessor(page);
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
            this.props.loadSearchAssignprofessor(this.state.search_content, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadAssignProfessor(currentPage)
        } else {
            this.props.loadSearchAssignprofessor(this.state.search_content, currentPage)
        }

    }
   
    loadaddpage = (e) => {
        this.props.history.push('/Dashboardprofessor/Addassign');
    }
    loadaddpagedocument = (e,id) => {
        this.props.history.push('/dashboardprofessor/Assignres/'+id);
    }
    loadEditpage = (e, code) => {
        this.props.history.push('/Dashboardprofessor/Mniveau/'+code);
    }

    DeleteCourse = (e, code) => {
        const confirmDialog = window.confirm("are you sure you want to delete this course?");
        if (confirmDialog == true) {
            this.props.deleteAssignUser(code);
        } else {

        }
    }

    

    render() {
        const { loadAssigns } = this.props;

        return (
    <div>
    <div class="col-sm-12">
    <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
            <Link className="btn btn-info" to="#" role="button"  onClick={(e) => this.loadaddpage()}><h4> 📘 Add New Assignements </h4></Link>
                <div className="row">
                <div class="col-sm-4	">						
					
                    <input placeholder="Search for assignement"  id="search_content" type="search"  onKeyUp={this.handleKeyUp} />

                </div>
     
                    
                 
                    
                </div>
            </div>
            <div class="">    
    <div class="">
        <div class="row">
        {loadAssigns && loadAssigns.hasOwnProperty('data') ? loadAssigns.data.data.map(row => (

            <div class="col-md-12">
                <div class="firma-card row">

                    <div class="col-md-5 img-padding-no">
                        <div class="firma-resim">
                            <a href="#">

                            </a>
                        </div>
                    </div>
                   
                    <div class="col-md-7">
                        <div class="firma-aciklama card-body">
                            <Link to="#" style={{marginLeft:'-62%',fontSize:"18px"}} id={row.id} onClick={(e) => this.loadaddpagedocument(e, row.id)} >{row.title_assign}</Link>
                            
                                
                                <Link className="btn btn-warning" to="MAssign" role="button" ><i class="material-icons">✎</i></Link>
                                
                                
                 
               
      
                                
                                <Link className="btn btn-danger" to="#" role="button"  ><i class="material-icons">🗑️</i></Link>
                                
                            

                            
                        </div>
                    </div>
                </div>
               


            </div>
             ))
             : null
         } 
          
        </div>
        <div className="d-flex justify-content-center">
                            {loadAssigns ?
                                <Pagination
                                    activePage={loadAssigns.data.current_page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={loadAssigns.data.total}
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
</div>   </div>

  </div>
)

}

}
const mapStateToProps = (state) => {
    return {
        loadAssigns: state.assign.loadAssigns
    }
    }
    
    
    const mapDispatchToProps = (dispatch) => {
    return {
        loadAssignProfessor: (page) => dispatch(loadAssignProfessor(page)),
        loadSearchAssignprofessor: (search_content, page) => dispatch(loadSearchAssignprofessor(search_content, page)),
        deleteAssignUser: (code) => dispatch(deleteAssignUser(code))
    }
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(Assign)
    
    

