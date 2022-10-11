import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from 'rc-pagination'

import { loadNiveauUser, loadSearchNiveauUser, deleteNiveauUser } from '../../store/actions/NiveauAction'

class Branchniveau extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: ""
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadNiveauUser(this.props.match.params.id,page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchNiveauUser(this.state.search_content,this.props.match.params.id, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadNiveauUser(currentPage)
        } else {
            this.props.loadSearchNiveauUser(this.state.search_content,this.props.match.params.id, currentPage)
        }

    }
    loadaddpage = (e) => {
        this.props.history.push('/dashboard/AddNiveau/'+ this.props.match.params.id);
    }
    loadEditpage = (e, code) => {
        this.props.history.push('/dashboard/Mniveau/' + code);
    }

    DeleteNiveau = (e, code) => {
        const confirmDialog = window.confirm("are you sure you want to delete this niveau?");
        if (confirmDialog == true) {
            this.props.deleteNiveauUser(code);
        } else {

        }
    }
    loadaddpagemodule = (e,id) => {
        this.props.history.push('/dashboard/NiveauModule/'+ id);
    }
    

    render() {
        const { loadNiveaus } = this.props;

        return (
            <div class="container">
            <div className="container-xl">
               <div className="table-responsive">
                   <div className="table-wrapper">
                       <div className="table-title">
                       <Link className="btn btn-info"  role="button" onClick={(e) => this.loadaddpage()}><h4> 📘 Add New Year </h4></Link>
                           <div className="row">
                               
                           <div class="col-sm-12	">						
                               
                               <input type="search"  placeholder="Search for Year"  id="search_content" onKeyUp={this.handleKeyUp} />
           
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
                           {loadNiveaus && loadNiveaus.hasOwnProperty('data') ? loadNiveaus.data.data.map(row => (
               
                               <tr>
                                   <td>{row.id}</td>
                                   <td><a href="" id={row.id} onClick={(e) => this.loadaddpagemodule(e, row.id)} >{row.name_niveau}</a></td>
                                   <td>
                                  
                                   <td><a href="" id={row.id} onClick={(e) => this.loadEditpage(e, row.id)} ><i class="material-icons">✎</i></a></td>
                                    <td><Link to="" id={row.id} onClick={(e) => this.DeleteNiveau(e, row.id)} ><i class="material-icons">🗑️</i></Link></td>

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
	loadNiveaus: state.niveau.loadNiveaus
}
}


const mapDispatchToProps = (dispatch) => {
return {
	loadNiveauUser: (page) => dispatch(loadNiveauUser(page)),
	loadSearchNiveauUser: (search_content, page) => dispatch(loadSearchNiveauUser(search_content, page)),
	deleteNiveauUser: (code) => dispatch(deleteNiveauUser(code))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Branchniveau)

