import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Pagination from 'rc-pagination'

import { loadNiveauall, loadSearchNiveauall } from '../../store/actions/NiveauAction'

class AllNiveau extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: ""
        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadNiveauall(page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchNiveauall(this.state.search_content, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadNiveauall(currentPage)
        } else {
            this.props.loadSearchNiveauall(this.state.search_content, currentPage)
        }

    }



    render() {
        const { loadNiveaus } = this.props;

        return (
            <div>
            <div className="container-xl">
               <div className="table-responsive">
                   <div className="table-wrapper">
                       <div className="table-title">
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

                               </tr>
                           </thead>
                           <tbody>
                           {loadNiveaus && loadNiveaus.hasOwnProperty('data') ? loadNiveaus.data.data.map(row => (
               
                               <tr>
                                   <td>{row.id}</td>
                                   <td>{row.name_niveau}</td>
                                   
                                  

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
	loadNiveauall: (page) => dispatch(loadNiveauall(page)),
	loadSearchNiveauall: (search_content, page) => dispatch(loadSearchNiveauall(search_content, page)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AllNiveau)

