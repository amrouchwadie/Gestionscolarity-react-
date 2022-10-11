import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from 'rc-pagination'

import { loadModuleUser, loadSearchModuleUser, deleteModuleUser } from '../../store/actions/ModuleAction'

class NiveauModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: ""
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadModuleUser(this.props.match.params.id,page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchModuleUser(this.state.search_content,this.props.match.params.id, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadModuleUser(currentPage)
        } else {
            this.props.loadSearchModuleUser(this.state.search_content,this.props.match.params.id, currentPage)
        }

    }
    loadaddpage = (e) => {
        this.props.history.push('/dashboard/AddModule/'+ this.props.match.params.id);
    }
    loadEditpage = (e, code) => {
        this.props.history.push('/dashboard/Mmodule/' + code);
    }

    DeleteModule = (e, code) => {
        const confirmDialog = window.confirm("are you sure you want to delete this module?");
        if (confirmDialog == true) {
            this.props.deleteModuleUser(code);
        } else {

        }
    }


    render() {
        const { loadModules } = this.props;

        return (
            <div>
            <div className="container-xl">
               <div className="table-responsive">
                   <div className="table-wrapper">
                       <div className="table-title">
                       <Link className="btn btn-info"  role="button" onClick={(e) => this.loadaddpage()}><h4> 📘 Add New Module </h4></Link>
                           <div className="row">
                               
                           <div class="col-sm-12	">						
                               
                               <input type="search"  placeholder="Search for Module"  id="search_content" onKeyUp={this.handleKeyUp} />
           
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
                           {loadModules && loadModules.hasOwnProperty('data') ? loadModules.data.data.map(row => (
               
                               <tr>
                                   <td>{row.id}</td>
                                   <td>{row.name_module}</td>
                                   <td>
                                  
                                   <td><a href="" id={row.id} onClick={(e) => this.loadEditpage(e, row.id)} ><i class="material-icons">✎</i></a></td>
                                    <td><Link to="" id={row.id} onClick={(e) => this.DeleteModule(e, row.id)} ><i class="material-icons">🗑️</i></Link></td>

                                   </td>

                               </tr>
                                     ))
                                     : null
                                 }
                           </tbody>
                       </table>
                      
                   </div>
               </div>  
           </div>   
             </div>

)

}

}
const mapStateToProps = (state) => {
return {
	loadModules: state.module.loadModules
}
}


const mapDispatchToProps = (dispatch) => {
return {
	loadModuleUser: (page) => dispatch(loadModuleUser(page)),
	loadSearchModuleUser: (search_content, page) => dispatch(loadSearchModuleUser(search_content, page)),
	deleteModuleUser: (code) => dispatch(deleteModuleUser(code))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(NiveauModule)

