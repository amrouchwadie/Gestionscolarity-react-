import './Addcourse.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { addDocument } from '../../store/actions/DocumentAction'


class Adddocument extends Component {



    constructor(props) {
        super(props)
        this.state = {
          name_doc: '',
          description_doc: '',
          document: '',
          course_id: this.props.match.params.id
    
        }
    
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
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
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addDocument(this.state)
      }
    render() {
        const { documentResponse } = this.props;
    return (
      <div>
      <div class="col-sm-12">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                        <div class="card card0 border-0">
                            <div class="row d-flex">
                                <div class="col-lg-6">
                                    <div class="card1 pb-5">
                                        <div class="row">  </div>
                                        <br /><br /><br /><br /><br /><div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://unblast.com/wp-content/uploads/2018/10/Back-to-School-Illustration.jpg" class="image" /> </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card2 card border-0 px-4 py-5">


                                        <h4 style={{ textAlign: 'center' }}> Add New Document</h4>
                                        <div className="line" style={{ alignSelf: "center" }}></div>
                                        <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Name</h6>
                                        </label> <input class="mb-4" type="text" name="name_doc" placeholder="Enter a valid Name" id="name_doc" onChange={this.handleChange} />
                                        <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Description</h6>
                                        </label> <input class="mb-4" type="text" name="description_doc" placeholder="Document Description " id="description_doc" onChange={this.handleChange} />
                                        <div class="form-group md-4">
                                            <Form.File id="document">
                                                <Form.File.Label>Upload Document</Form.File.Label>
                                                <Form.File.Input id="file" onChange={this.fileTransform} />
                                            </Form.File>

                                        </div>

                                        <button type="submit" class="btn btn-blue text-center"> <h4 style={{ color: "white" }}> Submit </h4> </button>
                                        <b>{documentResponse != null ? documentResponse : null}</b>

                                    </div>
                                </div>
                            </div>
                            <div class="bg-blue py-4">
                                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Add New Document</small>
                                    <div class="social-contact ml-4 ml-sm-auto"> <span class="	fa fa-file-zip-o mr-4 text-sm"></span> <span class="	fa fa-file-o mr-4 text-sm"></span> <span class="	fa fa-file-movie-o mr-4 text-sm"></span> <span class="	fa fa-file-code-o mr-4 mr-sm-5 text-sm"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
)
}
}
const mapDisPatchToProps = (dispatch) => {
return {
    addDocument: (creds) => dispatch(addDocument(creds))
}
}

const mapStateToProps = (state) => {
return {
  documentResponse: state.document.documentResponse
}
}
const style = {
display: 'flex',
justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(Adddocument)


