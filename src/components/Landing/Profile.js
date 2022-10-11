import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link,Redirect } from 'react-router-dom';
import Pagination from "react-js-pagination";


import { loadFiliereUser, loadSearchFiliereUser, deleteFiliereUser } from '../../store/actions/FiliereAction'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageRangeDisplayed: 10,
            search_content: ""
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadFiliereUser(page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {
            const page = "";
            this.props.loadFiliereUser(page);
        } else {
            let page = "";
            this.props.loadSearchFiliereUser(this.state.search_content, page);
        }
    }
  
    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadFiliereUser(currentPage)
        } else {
            this.props.loadSearchFiliereUser(this.state.search_content, currentPage)
        }

    }
    loadaddpage = (e) => {
        this.props.history.push('/dashboard/Archive');
    }
    loadEditpage = (e, id) => {
        this.props.history.push('/dashboard/Mbranch/'+id);
    }
    loadaddpageniveau = (e,id) => {
        this.props.history.push('/dashboard/Branchniveau/'+ id);
    }
    

    DeleteFiliere = (e, id) => {
        const confirmDialog = window.confirm("are you sure you want to delete this Branch?");
        if (confirmDialog == true) {
            this.props.deleteFiliereUser(id);
            
        } else {

        }
    }


    render() {
        const { loadFilieres } = this.props;

        return (
    <div>
    <div class="col-sm-12">
    <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
            <Link className="btn btn-info" to="#" role="button"  onClick={(e) => this.loadaddpage()}><h4> 📘 Add New Branch </h4></Link>
                <div className="row">
                <div class="col-sm-4	">						
					
                    <input placeholder="Search for Branch"  id="search_content" type="search"  onKeyUp={this.handleKeyUp} />

                </div>
     
                    
                 
                    
                </div>
            </div>
            <div class="">    
    <div class="">
        <div class="row">
        {loadFilieres && loadFilieres.hasOwnProperty('data') ? loadFilieres.data.data.map(row => (

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
                            <Link to="#" style={{marginLeft:'-62%',fontSize:"18px"}} id={row.id} onClick={(e) => this.loadaddpageniveau(e, row.id)} >{row.name_filiere}</Link>
                            
                                
                                <Link className="btn btn-warning" to="#" role="button" ><i class="material-icons">✎</i></Link>
                                
                                
                 
               
      
                                
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
                            {loadFilieres ?
                                <Pagination
                                    activePage={loadFilieres.data.current_page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={loadFilieres.data.total}
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
	loadFilieres: state.filiere.loadFilieres
}
}


const mapDispatchToProps = (dispatch) => {
return {
	loadFiliereUser: (page) => dispatch(loadFiliereUser(page)),
	loadSearchFiliereUser: (search_content, page) => dispatch(loadSearchFiliereUser(search_content, page)),
	deleteFiliereUser: (id) => dispatch(deleteFiliereUser(id))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)

