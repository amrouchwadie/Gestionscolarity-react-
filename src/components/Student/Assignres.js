import React, { Component } from 'react';
import './Courseres.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadDocumentDutyUser } from '../../store/actions/DocumentDutyAction'
import { addAssigndocument, loadAssigndocument } from '../../store/actions/AssigndocumentAction'

class Assignres extends Component {
  constructor(props) {
    super(props)
    this.state = {
      document: '',
      name_doc: '',
      assign_id: this.props.match.params.id,
      search_content: ""
    }
  }

  componentDidMount = () => {
    const page = "";
    const token = localStorage.getItem('user');
    console.log(token);
    this.props.loadDocumentDutyUser(this.props.match.params.id, page);
    this.props.loadAssigndocument(this.props.match.params.id, token);

  }
  loaddownloadpage = (e, id) => {
    window.open(id, "_blank");
  }
  getBase64 = (file, callback) => {

    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);

  }

  fileTransform = (e) => {

    this.getBase64(e.target.files[0], (base64String) => {
      this.state.document = base64String;
      console.log(this.state)

    })

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name_doc: this.state.name_doc,
      document: this.state.document,
      assign_id: this.state.assign_id
    }
    console.log(this.state);
    this.props.addAssigndocument(data)
  }

  render() {
    const { loadDocumentsDuty } = this.props;
    const { assigndocumentResponse } = this.props;
    const { loadAssignsdocumentt } = this.props;

    return (

      <div class="">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-12">
              <div class="row">
                <div class="col-lg-4 col-12 bg-white tab-head">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fa fa-file" aria-hidden="true"></i> Document</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fa fa-file" aria-hidden="true"></i> Reponse</a>
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
                          <h5 class="pt-2 m-0"><strong>Document</strong></h5>
                          {loadDocumentsDuty && loadDocumentsDuty.hasOwnProperty('data') ? loadDocumentsDuty.data.data.map(row => (

                            <p class="pt-2 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> {row.name_doc}</p>
                          ))
                            : null
                          }
                        </div>
                        <div class="col-lg-8 document-left-list">

                          <div class="bg-white document-left-list-second p-3">
                            <div class="row mt-3">

                              {loadDocumentsDuty && loadDocumentsDuty.hasOwnProperty('data') ? loadDocumentsDuty.data.data.map(row => (
                                <div class="col-lg-4 text-center">
                                  <div class="document-list border">
                                    <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>

                                    <p class="m-0 p-2 bg-danger text-white"><Link to="#" onClick={(e) => this.loaddownloadpage(e, loadDocumentsDuty.file_directory + "/" + row.path_doc)}>{row.name_doc}</Link></p>
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
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div class="row m-0">
                        <div class="col-lg-4 bg-white pt-4">
                          
                          <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <p>Document Name</p>
                             <input class="mb-4" type="text" name="name_doc" placeholder="Enter a valid Name" id="name_doc" onChange={this.handleChange} />

                            <div class="form-group md-4">
                              <Form.File id="document">
                                <Form.File.Label>Upload Document</Form.File.Label>
                                <Form.File.Input id="file" onChange={this.fileTransform} />
                              </Form.File>

                            </div>
                            <button type="submit" class="btn btn-success btn-sm w-100 mt-2 mb-3">Upload</button>
                            <b>{assigndocumentResponse != null ? assigndocumentResponse : null}</b>

                          </form>
                        </div>

                        <div class="col-lg-8 document-left-list">

                          <div class="bg-white document-left-list-second p-3">
                          <div class="row mt-3">

                              {loadAssignsdocumentt && loadAssignsdocumentt.hasOwnProperty('data') ? loadAssignsdocumentt.data.map(row => (
                                <div class="col-lg-4 text-center">
                                  <div class="document-list border">
                                    <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>

                                    <p class="m-0 p-2 bg-danger text-white"><Link to="#" onClick={(e) => this.loaddownloadpage(e, loadAssignsdocumentt.file_directory + "/" + row.chifre_answer)}>{row.name_doc}</Link></p>
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
      </div>
    )

  }

}
const mapStateToProps = (state) => {
  return {
    loadDocumentsDuty: state.documentduty.loadDocumentsDuty,
    assigndocumentResponse: state.assigndocument.assigndocumentResponse,
    loadAssignsdocumentt: state.assigndocument.loadAssignsdocumentt

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadDocumentDutyUser: (page) => dispatch(loadDocumentDutyUser(page)),
    loadAssigndocument: (id, token) => dispatch(loadAssigndocument(id, token)),
    addAssigndocument: (creds) => dispatch(addAssigndocument(creds)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Assignres)





