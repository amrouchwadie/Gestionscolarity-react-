import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from 'rc-pagination'

import { loadModuleall, loadSearchModuleall } from '../../store/actions/ModuleAction'

class AllModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: ""
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadModuleall(page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchModuleall(this.state.search_content, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadModuleall(currentPage)
        } else {
            this.props.loadSearchModuleall(this.state.search_content, currentPage)
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

                               </tr>
                           </thead>
                           <tbody>
                           {loadModules && loadModules.hasOwnProperty('data') ? loadModules.data.data.map(row => (
               
                               <tr>
                                   <td>{row.id}</td>
                                   <td>{row.name_module}</td>


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
	loadModuleall: (page) => dispatch(loadModuleall(page)),
	loadSearchModuleall: (search_content, page) => dispatch(loadSearchModuleall(search_content, page)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AllModule)

