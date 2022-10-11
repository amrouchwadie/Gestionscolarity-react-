import React, { Component } from 'react';
import './Courseres.css'
import { connect } from 'react-redux'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { loadDocumentDutyUser, loadSearchDocumentDutyUser, deleteDocumentDutyUser } from '../../store/actions/DocumentDutyAction'

class Assignres extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search_content: ""
    }
  }

  componentDidMount = () => {
    const page = "";
    this.props.loadDocumentDutyUser(this.props.match.params.id, page);
  }
  loaddownloadpage = (e, id) => {
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
      this.props.loadSearchDocumentDutyUser(this.state.search_content, this.props.match.params.id, page);
    }
  }

  onChange = (currentPage) => {
    if (this.state.search_content == "") {
      this.props.loadDocumentDutyUser(currentPage)
    } else {
      this.props.loadSearchDocumentDutyUser(this.state.search_content, this.props.match.params.id, currentPage)
    }

  }

  DeleteDocument = (e, code) => {
    const confirmDialog = window.confirm("are you sure you want to delete this Document?");
    if (confirmDialog == true) {
      this.props.deleteDocumentDutyUser(code);
    } else {

    }
  }

  loadaddpage = (e) => {
    this.props.history.push('/Dashboardprofessor/Assigndoc/' + this.props.match.params.id);
  }
  render() {
    const { loadDocumentsDuty } = this.props;

    return (

      <div class="container main-section pt-20">
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
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fa fa-picture-o" aria-hidden="true"></i> Reponse</a>
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
                        <a href="#" class="btn btn-success btn-sm w-100 mt-2 mb-3" onClick={(e) => this.loadaddpage()}><i class="fa fa-plus" aria-hidden="true"></i> File Upload</a>
                      </div>
                      <div class="col-lg-8 document-left-list">

                        <div class="bg-white document-left-list-second p-3">
                          <div class="row mt-3">

                            {loadDocumentsDuty && loadDocumentsDuty.hasOwnProperty('data') ? loadDocumentsDuty.data.data.map(row => (
                              <div class="col-lg-4 text-center">
                                <div class="document-list border">
                                <i class="material-icons" style={{fontSize:"30px", marginLeft:"60%"}}>X</i>
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
                        <h5 class="p-0 m-0"><strong>Folders</strong></h5>
                        <p class="pt-2 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> April meeting</p>
                        <p class="p-0 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> Applictaion presentaion</p>
                        <p class="p-0 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> Staff Profile Pictures</p>
                        <p class="p-0 m-0"><i class="fa fa-folder pl-2 text-secondary pr-1" aria-hidden="true"></i> Trip to Yosemite</p>
                        <a href="#" class="btn btn-success btn-sm w-100 mt-2 mb-3"><i class="fa fa-plus" aria-hidden="true"></i> File Upload</a>
                      </div>
                      <div class="col-lg-8 images-part">
                        <div class="bg-white p-3">
                          <div class="row mt-2">
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZAjknpF5QsPYopf68cGKaMVUP_L8SkM4cqM-VIlk0-CVRtAh" />
                                <p class="m-0 p-2 bg-secondary text-white">Developer</p>
                              </div>
                            </div>
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI" />
                                <p class="m-0 p-2 bg-secondary text-white">Designer</p>
                              </div>
                            </div>
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxK2Mc2iU_bKarcgB-RfJxzXHzpCjwhH1kLXnmuO0tASdC3Akm" />
                                <p class="m-0 p-2 bg-secondary text-white">CEO</p>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://todayshomeinc.com/wp-content/uploads/2016/07/DenzelAvatar.jpg" />
                                <p class="m-0 p-2 bg-secondary text-white">Manager</p>
                              </div>
                            </div>
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgunBZqySqYTuWp-4phthaq0rNrOx4J5b8NnTBn-D4kiV1xZl" />
                                <p class="m-0 p-2 bg-secondary text-white">Oprater</p>
                              </div>
                            </div>
                            <div class="col-lg-4 text-center">
                              <div class="images-list border">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr" />
                                <p class="m-0 p-2 bg-secondary text-white">Managment</p>
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
      </div>
      </div>
    )

  }

}
const mapStateToProps = (state) => {
  return {
    loadDocumentsDuty: state.documentduty.loadDocumentsDuty
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadDocumentDutyUser: (page) => dispatch(loadDocumentDutyUser(page)),
    loadSearchDocumentDutyUser: (search_content, page) => dispatch(loadSearchDocumentDutyUser(search_content, page)),
    deleteDocumentDutyUser: (code) => dispatch(deleteDocumentDutyUser(code))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Assignres)





