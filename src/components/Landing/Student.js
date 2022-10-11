import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pagination from "react-js-pagination";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadStudentUser, loadSearchStudentUser, deleteStudentUser, loadfiltreStudentUser } from '../../store/actions/StudentAction'
import axios from 'axios';
class Student extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: "",
            filtre: "",
            pageRangeDisplayed: 3,
            name: '',
            Niveaus: [],
            Filiere: []

        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadStudentUser(page);
        axios.get('http://127.0.0.1:8000/api/indexniveau')
            .then(response => {
                this.setState({ Niveaus: response.data.data });
                console.log(response.data)
            });
        axios.get('http://127.0.0.1:8000/api/indexfiliere')
            .then(response => {
                this.setState({ Filiere: response.data.data });
                console.log(response.data)
                console.log(this.state.Filiere)

            });
    }
    loadpage = (e) => {
        const page = "";
        this.props.loadStudentUser(page);
    }
    handleChange = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        if (this.state.filtre == "") {
            const page = "";
            console.log("hello1")
            this.props.loadStudentUser(page);
        } else {
            let page = "";
            console.log("hello")
            this.props.loadfiltreStudentUser(this.state.filtre, page);

        }
    }
    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {
            const page = "";
            this.props.loadStudentUser(page);
        } else {
            let page = "";
            this.props.loadSearchStudentUser(this.state.search_content, page);
        }
    }

    onDelete(id) {
        const confirmDialog = window.confirm("are you sure you want to delete this student?");
        if (confirmDialog == true) {
            axios.delete('http://127.0.0.1:8000/api/student/delete/' + id)
                .then(response => {

                });

        } else {

        }

    }
    onChange = (currentPage) => {
        if (this.state.search_content == "" || this.state.filtre == "") {
            this.props.loadStudentUser(currentPage)
        }
        if (this.state.search_content !== "") {
            this.props.loadSearchStudentUser(this.state.search_content, currentPage)

        }
        if (this.state.filtre !== "") {
            this.props.loadfiltreStudentUser(this.state.filtre, currentPage)

        }

    }

    loadaddpage = (e) => {
        this.props.history.push('/dashboard/Addstudent');
    }
    loadEditpage = (e, id) => {
        this.props.history.push('/dashboard/MStudent/' + id);
    }
    ProfileStudent = (e, id) => {
        this.props.history.push('/dashboard/ProfileStudent/' + id);
    }

    DeleteStudent = (e, id) => {
        const confirmDialog = window.confirm("are you sure you want to delete this student?");
        if (confirmDialog == true) {
            this.props.deleteStudentUser(id);

        }
        else {

        }


    }


    render() {
        const { loadStudents } = this.props;
        return (
            <div>

                <br />
                <div class="container">

                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h2> Student Detail</h2>
                                </div>
                                <div class="col-sm-8">
                                    <Link to="#" className="btn btn-info btn-lg active" role="button" onClick={(e) => this.loadaddpage()} >🏡 Add New Student</Link>
                                    <Link to="#" class="btn btn-primary" role="button" onClick={(e) => this.loadpage()}><i class="material-icons"></i> <span>Refresh List</span></Link>
                                    <Link to="#" class="btn btn-info"><i class="material-icons"></i> <span>Export to Excel</span></Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-12	">
                                <input id="search_content" type="search" placeholder="Search for Student" onKeyUp={this.handleKeyUp} />
                            </div>

                        </div><br />
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">

                                    <select className="custom-select" id="filtre" type="search" onChange={this.handleChange} >
                                        <option value="">Branch</option>
                                        {this.state.Filiere.map(data2 => {
                                            return (
                                                <option value={data2.id}>{data2.name_filiere} </option>
                                            );
                                        })
                                        }
                                    </select>
                                </div>
                                <span class="filter-icon"><i class="fa fa-filter"></i></span> &nbsp;&nbsp;&nbsp;

    <div class="col-sm">
                                </div>
                                <span class="filter-icon"><i class="fa fa-filter"></i></span> &nbsp;&nbsp;&nbsp;

    <div class="col-sm">

                                    <select className="custom-select" id="filtre" type="search" onChange={this.handleChange} >
                                        <option value="">Grad</option>
                                        {this.state.Niveaus.map(data2 => {
                                            return (
                                                <option value={data2.id}>{data2.name_niveau} </option>
                                            );
                                        })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <br />
                        <table className="table table-striped table-hover" id="tablestudent">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Photo</th>
                                    <th>Code</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>E-Mail</th>
                                    <th>Telephone</th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {loadStudents && loadStudents.hasOwnProperty('data') ? loadStudents.data.data.map(row => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td><img src={loadStudents.file_directory + "/" + row.photo_std} width={50} height={50} /></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.ProfileStudent(e, row.id)} >{row.code_std}</a></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.ProfileStudent(e, row.id)} >{row.firstname_std}</a></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.ProfileStudent(e, row.id)} >{row.lastname_std}</a></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.ProfileStudent(e, row.id)} >{row.email_std}</a></td>
                                        <td>{row.telephone_std}</td>
                                        <td></td>
                                        <td><a href="" id={row.id} onClick={(e) => this.loadEditpage(e, row.id)} ><i class="material-icons">✎</i></a></td>
                                        <td><Link to="#" refresh="true" id={row.id} onClick={(e) => this.DeleteStudent(e, row.id)}><i class="material-icons">🗑️</i></Link></td>
                                    </tr>
                                ))
                                    : null
                                }
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            {loadStudents ?
                                <Pagination
                                    activePage={loadStudents.data.current_page}
                                    itemsCountPerPage={3}
                                    totalItemsCount={loadStudents.data.total}
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
        loadStudents: state.student.loadStudents
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadStudentUser: (page) => dispatch(loadStudentUser(page)),
        loadSearchStudentUser: (search_content, page) => dispatch(loadSearchStudentUser(search_content, page)),
        deleteStudentUser: (id) => dispatch(deleteStudentUser(id)),
        loadfiltreStudentUser: (filtre, page) => dispatch(loadfiltreStudentUser(filtre, page)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Student)
