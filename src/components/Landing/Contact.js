import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pagination from "react-js-pagination";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadProfessorUser, loadSearchProfessorUser, deleteProfessorUser } from '../../store/actions/ProfessorAction'
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: "",
            pageRangeDisplayed: 2,
            professors: []

        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadProfessorUser(page);
       
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {

        } else {
            let page = "";
            this.props.loadSearchProfessorUser(this.state.search_content, page);
        }
    }

    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadProfessorUser(currentPage)
        } else {
            this.props.loadSearchProfessorUser(this.state.search_content, currentPage)
        }

    }

    loadaddpage = (e) => {
        this.props.history.push('/dashboard/AddProf');
    }
    loadEditpage = (e, id) => {
        this.props.history.push('/dashboard/MProf/' + id);
    }

    DeleteProfessor = (e, id) => {
        const confirmDialog = window.confirm("are you sure you want to delete this professor?");
        if (confirmDialog == true) {
            this.props.deleteProfessorUser(id);
        } else {

        }
    }


    render() {
        const { loadProfessors } = this.props;

        return (
            <div>
                <br />
                <div class="container">

                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h2> Professor Detail</h2>
                                </div>
                                <div class="col-sm-8">
                                    <Link to="#" className="btn btn-info btn-lg active" role="button" onClick={(e) => this.loadaddpage()} >🏡 Add New Professor</Link>
                                    <Link to="#" class="btn btn-primary"><i class="material-icons"></i> <span>Refresh List</span></Link>
                                    <Link to="#" class="btn btn-info"><i class="material-icons"></i> <span>Export to Excel</span></Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-12	">
                                <input id="search_content" type="search" placeholder="Search for Professor" onKeyUp={this.handleKeyUp} />
                            </div>

                        </div>
 
                        <br />
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Photo</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>E-Mail</th>
                                    <th>Telephone</th>
                                    <th>Domain</th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {loadProfessors && loadProfessors.hasOwnProperty('data') ? loadProfessors.data.data.map(row => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td><img src={loadProfessors.file_directory + "/" + row.photo} width={50} height={50} /></td>
                                        <td>{row.firstname}</td>
                                        <td>{row.lastname}</td>
                                        <td>{row.email}</td>
                                        <td>{row.telephone}</td>
                                        <td>{row.type}</td>
                                        <td></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.loadEditpage(e, row.id)} ><i class="material-icons">✎</i></a></td>
                                        <td><Link href="" id={row.id} onClick={(e) => this.DeleteProfessor(e, row.id)} ><i class="material-icons">🗑️</i></Link></td>
                                    </tr>
                                ))
                                    : null
                                }
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            {loadProfessors ?
                                <Pagination
                                    activePage={loadProfessors.data.current_page}
                                    itemsCountPerPage={2}
                                    totalItemsCount={loadProfessors.data.total}
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

            </div >
        )

    }

}
const mapStateToProps = (state) => {
    return {
        loadProfessors: state.professor.loadProfessors
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadProfessorUser: (page) => dispatch(loadProfessorUser(page)),
        loadSearchProfessorUser: (search_content, page) => dispatch(loadSearchProfessorUser(search_content, page)),
        deleteProfessorUser: (id) => dispatch(deleteProfessorUser(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact)
