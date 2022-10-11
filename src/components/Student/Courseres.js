import React, { Component } from 'react';
import './Courseres.css'
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadDocumentUser, loadSearchDocumentUser } from '../../store/actions/DocumentAction'

class Courseres extends Component {
  constructor(props) {
    super(props)
    this.state = {
        search_content: ""
    }
}

componentDidMount = () => {
    const page = "";
    this.props.loadDocumentUser(this.props.match.params.id,page);
}
loaddownloadpage= (e,id) => {
  window.open(id, "_blank");
}
handleKeyUp = async (e) => {
    await this.setState({
        [e.target.id]: e.target.value
    })
    console.log(this.state)
    if (this.state.search_content == "") {

    } else {
        let page = "";
        this.props.loadSearchDocumentUser(this.state.search_content,this.props.match.params.id, page);
    }
}

onChange = (currentPage) => {
    if (this.state.search_content == "") {
        this.props.loadDocumentUser(currentPage)
    } else {
        this.props.loadSearchDocumentUser(this.state.search_content,this.props.match.params.id, currentPage)
    }

}


 
  render() {
    const { loadDocuments } = this.props;

    return (
      <div class="main-section pt-20">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-4 col-12 bg-white tab-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fa fa-file" aria-hidden="true"></i> Document</a>
                  </li>

                </ul>
              </div>
              <div class="col-lg-12 main-tab">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row m-0">
                      <div class="col-lg-4 document bg-white pt-3">
                        <span class="badge badge-success pl-2 pr-2">Excel</span>
                        <span class="badge badge-info pl-2 pr-2">Word</span>
                        <span class="badge badge-danger pl-2 pr-2">PowerPoint</span>
                        <span class="badge badge-warning text-white pl-2 pr-2">PDF</span>
                        <h5 class="pt-2 m-0"><strong>Documents</strong></h5>
                        {loadDocuments && loadDocuments.hasOwnProperty('data') ? loadDocuments.data.data.map(row => (

                        <p class="pt-2 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> {row.name_doc}</p>
                        ))
                        : null
                    }
                    
                        </div>

                      <div class="col-lg-8 document-left-list">
                        
                        <div class="bg-white document-left-list-second p-3">
                        <div class="row mt-3">

                           
                            {loadDocuments && loadDocuments.hasOwnProperty('data') ? loadDocuments.data.data.map(row => (
 <div class="col-lg-4 text-center">
                              <div class="document-list border">
                                <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>

                                <p class="m-0 p-2 bg-danger text-white"><Link to="#"  onClick={(e) => this.loaddownloadpage(e, loadDocuments.file_directory + "/" + row.path_doc)}>{row.name_doc}</Link></p>
                                </div>
                              </div>
                               ))
                               : null
                           }
                           
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)

}

}
const mapStateToProps = (state) => {
return {
	loadDocuments: state.document.loadDocuments
}
}


const mapDispatchToProps = (dispatch) => {
return {
	loadDocumentUser: (page) => dispatch(loadDocumentUser(page)),
	loadSearchDocumentUser: (search_content, page) => dispatch(loadSearchDocumentUser(search_content, page)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Courseres)





