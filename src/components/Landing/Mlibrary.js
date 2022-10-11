import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editBookUser } from '../../store/actions/LibraryAction'
import DefaultImg from '../../image/default-img.png'
import Form from 'react-bootstrap/Form'

class Mlibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book_name: '',
      publication_date: '',
      new_file: '',
      profile_image: '',
      document:'',
      author:'',
      description: '',
      nbr_page: '',
      domain: '',
      file_directory: '',
      new_image: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleBooks !== this.props.loadSingleBooks) {
      let singleData = this.props.loadSingleBooks;
      this.setState({
        book_name: singleData.data.book_name,
        publication_date: singleData.data.publication_date,
        new_file: singleData.data.figure_book,
        new_image: singleData.data.photo,
        description: singleData.data.description,
        nbr_page: singleData.data.nbr_page,
        author: singleData.data.author,
        domain: singleData.data.domain,
        file_directory: singleData.file_directory 
      })
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
    const { id } = this.props.match.params;
    console.log(this.state);
    this.props.editBookUser(this.state, id);
  }



  render() {
    const { bookResponse } = this.props;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Update Book </h2>

              <div class="form-group">
                <div class="form-group col-md-14">
                  <label for="inputAddress">Book Title</label><br/>
                  <input type="text" class="form-control" id="book_name" name="book_name" placeholder="Enter Title" 
                  onChange={this.handleChange} value={this.state.book_name || ''} required />
                </div>

              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Author</label><br/>
                  <input type="text" class="form-control" id="author" name="author" placeholder="Author Name" 
                  onChange={this.handleChange} value={this.state.author || ''} required />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">date</label><br/>
                  <input type="date" class="form-control" id="publication_date" name="publication_date"
                   placeholder="Date" onChange={this.handleChange} value={this.state.publication_date || ''} required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Domain</label>
                  <select type="none" className="custom-select" id="domain" name="domain" 
                  onChange={this.handleChange} value={this.state.domain || ''} required >
                    <option></option>
                    <option value="Mathematical">Mathematical</option>
                    <option value="Physic">Physic</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer science">Computer science</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPage4">Pages</label><br/>
                  <input type="text" class="form-control" id="nbr_page" name="nbr_page" 
                  placeholder="Enter number of pages" onChange={this.handleChange} value={this.state.nbr_page || ''} required />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Description</label><br/>
                <textarea type="text" class="form-control" id="description" name="description" placeholder="Book Description"
                 onChange={this.handleChange}  value={this.state.description || ''}required ></textarea>
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


const mapStateToProps = (state) => {
  return {
    loadSingleBooks: state.book.loadSingleBooks,
    bookResponse: state.book.bookResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editBookUser: (credentials, id) => dispatch(editBookUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mlibrary)