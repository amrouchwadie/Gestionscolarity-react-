import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import axios from 'axios';
import { connect } from 'react-redux'

import { loadAssignStudent} from '../../store/actions/AssignAction'

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
        this.props.loadAssignStudent(page);
    }
    getNameModule = (id) =>{
        axios.get('http://127.0.0.1:8000/api/getnameNiveau/'+id)
          .then(response => {
            this.setState({ name : response.data.data });
            console.log(this.state.name)
          });
        
      }

    loadaddpagedocument = (e,id) => {
        this.props.history.push('/dashboardstudent/Assignres/'+id);
    }
   
    render() {
        const { loadAssigns } = this.props;
        const { assigndocumentResponse } = this.props;

        return (
    <div>
    <div class="col-sm-12">
    <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
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
        loadAssignStudent: (page) => dispatch(loadAssignStudent(page)),
    }
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(Assign)
    
    

