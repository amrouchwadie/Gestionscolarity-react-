import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser } from '../../store/actions/LibraryAction'
import DefaultImg from '../../image/default-img.png'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './Libraryprof.css';

class Libraryprof extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book_name: '',
      publication_date: '',
      new_file: '',
      profile_image: '',
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
  
  loaddownloadpage= (e,id) => {
    window.open(id, "_blank");
}
  componentDidUpdate = async (prevProps) => {
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




  

  render() {
    return (
  <div>
<div id="page-wrap">
    
    <img src={this.state.file_directory + "/" + this.state.new_image} alt="Photo of Cthulu" id="pic" style={{width: 250, height: 250}}/> 
    <div id="contact-info" class="vcard">
    
     
    
        <h1 class="fn">Title : {this.state.book_name} </h1>
    
       
    </div>
            
    <div id="objective">
        <p>
        <a class="nbr_page" href="#">Description :</a>
        {this.state.description} 
        <br /> <br /> <br />  </p>
    </div>
    
    <div class="clear"></div>
    <Link to="#" className="boxed-btn5" id="pic" onClick={(e) => this.loaddownloadpage(e, this.state.file_directory + "/" + this.state.new_file)}>Download as PDF</Link>
<br/>
    <hr /> 
    <dl>
        
        <dd class="clear"></dd>
        
        <dt>Author</dt>
        <dd> <h4>	{this.state.author}</h4> </dd>
        
        <dd class="clear"></dd>
        
        <dt>Information</dt>
        <dd> <li> <h4>{this.state.publication_date}</h4></li></dd>
        <dd><li><h4>Pages : {this.state.nbr_page}</h4></li></dd>
        
        <dd class="clear"></dd>
    </dl>
    
    <div class="clear"></div>

</div>
  </div>
 )
}
}


const mapStateToProps = (state) => {
return {
  loadSingleBooks: state.book.loadSingleBooks,
}
}

const mapDispatchToProps = (dispatch) => {
return {
  loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),

}
}


export default connect(mapStateToProps, mapDispatchToProps)(Libraryprof)
