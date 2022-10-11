import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../store/actions/LibraryAction'
import Form from 'react-bootstrap/Form'




class NLibrary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book_name: '',
      nbr_page: '',
      document: '',
      domain: '',
      author: '',
      profile_image: '',
      publication_date: '',
      description: ''

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
      this.state.profile_image = base64String;
      console.log(this.state)
    })
  }
  Transformfile = (e) => {
    this.getBase64(e.target.files[0], (base64String) => {
      this.state.document = base64String;
      console.log(this.state)
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addBook(this.state)
  }
 
  render() {
    const { bookResponse } = this.props;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Upload a Book to the library </h2>

              <div class="form-group">
                <div class="form-group col-md-14">
                  <label for="inputAddress">Book Title</label><br/>
                  <input type="text" class="form-control" id="book_name" name="book_name" placeholder="Enter Title" onChange={this.handleChange} required />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Author</label><br/>
                  <input type="text" class="form-control" id="author" name="author" placeholder="Author Name" onChange={this.handleChange} required />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">date</label><br/>
                  <input type="date" class="form-control" id="publication_date" name="publication_date" placeholder="Date" onChange={this.handleChange} required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Domain</label>
                  <select type="none" className="custom-select" id="domain" name="domain" onChange={this.handleChange} required >
                    <option></option>
                    <option value="Mathematical">Mathematical</option>
                    <option value="Physic">Physic</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer science">Computer science</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPage4">Pages</label><br/>
                  <input type="text" class="form-control" id="nbr_page" name="nbr_page" placeholder="Enter number of pages" onChange={this.handleChange} required />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Description</label><br/>
                <textarea type="text" class="form-control" id="description" name="description" placeholder="Book Description" onChange={this.handleChange} required ></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <Form.File id="document">
                    <Form.File.Label>Upload Document</Form.File.Label>
                    <Form.File.Input id="file" onChange={this.Transformfile}/>
                  </Form.File>

                </div>
                <div class="form-group col-md-6">
                  <label for="inputAddress2">Upload picture</label>
                  <input type="file" id="photo" onChange={this.fileTransform} />

                </div>
              </div>
              <button type="submit" class="btn btn-primary" classNameName="submit"> <h4> Submit </h4> </button>
              <b>{bookResponse != null ? bookResponse : null}</b>
              <div class="form-group col-md-6">
                </div>
            </div>
          </div>
        </form>

      </div>
    )
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    addBook: (creds) => dispatch(addBook(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    bookResponse: state.book.bookResponse
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(NLibrary)