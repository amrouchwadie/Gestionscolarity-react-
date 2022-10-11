import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pagination from "react-js-pagination";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadBookUser, loadSearchBookUser, deleteBookUser } from '../../store/actions/LibraryAction'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
class Library extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_content: "",
            pageRangeDisplayed: 3,

        }
    }

    componentDidMount = () => {
        const page = "";
        this.props.loadBookUser(page);

    }
    loadpage = (e) => {
        const page = "";
        this.props.loadBookUser(page);
    }

    handleKeyUp = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
        if (this.state.search_content == "") {
            const page = "";
            this.props.loadBookUser(page);
        } else {
            let page = "";
            this.props.loadSearchBookUser(this.state.search_content, page);
        }
    }

    onDelete(id) {
        const confirmDialog = window.confirm("are you sure you want to delete this Book?");
        if (confirmDialog == true) {
            axios.delete('http://127.0.0.1:8000/api/book/delete/' + id)
                .then(response => {

                });

        } else {

        }

    }
    onChange = (currentPage) => {
        if (this.state.search_content == "") {
            this.props.loadBookUser(currentPage)
        }
        if (this.state.search_content !== "") {
            this.props.loadSearchBookUser(this.state.search_content, currentPage)

        }


    }
    loaddownloadpage= (e,id) => {
        window.open(id, "_blank");
    }
    loadaddpage = (e) => {
        this.props.history.push('/Dashboardprofessor/NLibrary');
    }
    loadEditpage = (e, id) => {
        this.props.history.push('/Dashboardprofessor/Mlibrary/' + id);
    }
    loadprofilepage = (e, id) => {
        this.props.history.push('/Dashboardprofessor/Libraryprof/' + id);
    }

    DeleteBook = (e, id) => {
        const confirmDialog = window.confirm("are you sure you want to delete this Book?");
        if (confirmDialog == true) {
            this.props.deleteBookUser(id);

        }
        else {

        }


    }


    render() {
        const { loadBooks } = this.props;
        return (
            <div class="container">
                <div>
                    <Table striped bordered hover>
                        <thead style={{ backgroundColor: "grey" }}>
                            <tr>
                                <th >
                                    <div class="row">
                                        <div class="col-sm">
                                            <select class="custom-select" id="inputGroupSelect01">
                                                <option selected>Filter Option...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-8">

                                        </div>
                                        <div class="col-sm">
                                            <Link to="NLibrary" className="btn btn-info btn-lg active" role="button" onClick={(e) => this.loadaddpage()}>📙Add New Book</Link>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="row">
                                        <div class="col-sm">

                                        </div>
                                        <div class="col-sm-12">
                                            <input id="search_content" type="search" placeholder="Search for Book" onKeyUp={this.handleKeyUp} />
                                        </div>
                                        <div class="col-sm">

                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr class="sm">
                                <td>

                                    <ul class="cards">
                                    {loadBooks && loadBooks.hasOwnProperty('data') ? loadBooks.data.data.map(row => (

                                        <li class="cards__item">
                                            <div class="card">
                                                <img src={loadBooks.file_directory + "/" + row.photo} style={{ width: "300px" ,height:"350px"}} />
                                                <div class="card__content">
                                                    <div class="card__title"><Link to="#" onClick={(e) => this.loadprofilepage(e, row.id)}> {row.book_name}</Link></div>
                                                    <Link to="#" class="btn btn--block card__btn" onClick={(e) => this.loaddownloadpage(e, loadBooks.file_directory + "/" + row.photo)}>Download</Link>
                                                </div>
                                            </div>
                                        </li>
                                       ))
                                       : null
                                   } 
                                        
                                    </ul>

                                </td>

                            </tr>

                            <div className="d-flex justify-content-center">
                            {loadBooks ?
                                <Pagination
                                    activePage={loadBooks.data.current_page}
                                    itemsCountPerPage={3}
                                    totalItemsCount={loadBooks.data.total}
                                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                                    onChange={this.onChange}
                                    itemClass='page-item'
                                    linkClass='page-link'
                                />

                                : null
                            }

                        </div>

                        </tbody>

                    </Table>
                </div>
            </div >
        )

    }

}
const mapStateToProps = (state) => {
    return {
        loadBooks: state.book.loadBooks
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadBookUser: (page) => dispatch(loadBookUser(page)),
        loadSearchBookUser: (search_content, page) => dispatch(loadSearchBookUser(search_content, page)),
        deleteBookUser: (id) => dispatch(deleteBookUser(id)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Library)
