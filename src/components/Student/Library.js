import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pagination from "react-js-pagination";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadBookUser, loadSearchBookUser } from '../../store/actions/LibraryAction'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import './style5.css'
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
    
    
    loadprofilepage = (e, id) => {
        this.props.history.push('/Dashboardstudent/Libraryprof/' + id);
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
                                                    <Link to="#" class="btn btn--block card__btn" onClick={(e) => this.loaddownloadpage(e, loadBooks.file_directory + "/" + row.figure_book)}>Download</Link>
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

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Library)
