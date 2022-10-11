import './Addcourse.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAssign } from '../../store/actions/AssignAction'
import axios from 'axios';


class Addassign extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code_module: '',
      title_assign: '',
      code_niveau: '',
      code_filiere: '',
      Listt:[],
      visibility_assign: '',
      code:'',
      Filiere:[],
      Niveaus:[]
    }

  }
  componentDidMount = () => {
    axios.get('http://127.0.0.1:8000/api/indexfiliere')
      .then(response => {
        this.setState({ Filiere: response.data.data });
        console.log(response.data)
        console.log(this.state.Filiere)

      });
  }
  getnameniveau = (e,id)=>{
    axios.get('http://127.0.0.1:8000/api/getniveau/'+id)
      .then(response => {
        this.setState({ Niveaus: response.data.data });
        console.log(response.data)

      });
  }
 
getNameModule = (e,id) =>{
  axios.get('http://127.0.0.1:8000/api/store/'+id)
    .then(response => {
      this.setState({ Listt: response.data.data });
      console.log(this.state.Listt)

    });
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
  handleSubmit = (e) => {
    const assignn={
      code_module : this.state.code_module,
      title_assign:this.state.title_assign,
      code_filiere:this.state.code_filiere,
      code_niveau : this.state.code_niveau,
      visibility_assign:this.state.visibility_assign
    }
    e.preventDefault();
    console.log(this.state);
    this.props.addAssign(assignn)
  }

  render() {
    const { assignResponse } = this.props;
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
                    <br /><br /><br /><br /><br /><div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://unblast.com/wp-content/uploads/2018/10/Back-to-School-Illustration.jpg" class="image"/> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    
                    
                         <h4 style={{textAlign: 'center'}}> Add New Assign</h4>
                    <div className="line" style={{alignSelf:"center"}}></div>
                     <label class="mb-1">
                            <h6 class="mb-0 text-sm">Name</h6>
                        </label> <input class="mb-4" type="text" name="title_assign" placeholder="Enter a valid Name" id ="title_assign"  onChange={this.handleChange}/>
                        <label for="inputEmail4">Year Name</label>
                  <select type="none" className="custom-select" id="code_filiere" name="code_filiere" onChange={this.handleChange} onClick={(e) => this.getnameniveau(e, this.state.code_filiere)} required >
                  <option ></option>
                  {this.state.Filiere.map(data2 => {
                                return (
                                    <option value={data2.id}>{data2.name_filiere} </option>
                                );
                            })
                            }
                  </select>
                  <label for="inputEmail4">Year Name</label>
                  <select type="none" className="custom-select" id="code_niveau" name="code_niveau" onChange={this.handleChange} onClick={(e) => this.getNameModule(e, this.state.code_niveau)} required >
                  <option ></option>
                  {this.state.Niveaus.map(data2 => {
                                return (
                                    <option value={data2.id}>{data2.name_niveau} </option>
                                );
                            })
                            }
                  </select>
                  <label for="inputEmail4">Module Name</label>
                  <select type="none" className="custom-select" id="code_module" name="code_module" onChange={this.handleChange} required >
                  <option ></option>
                  {this.state.Listt.map(data3 => {
                                return (
                                    <option value={data3.id}>{data3.name_module}</option>
                                );
                            })

                            }
                  </select>
                    
                  <label for="inputEmail4">Visibility of The Assign</label>
                  <select type="none" className="custom-select" id="visibility_assign" name="visibility_assign" onChange={this.handleChange} required >
                  <option ></option>
                      <option value= "null">All</option>
                      <option value= "exact">Specified</option>
                  </select> 

                      <button type="submit" class="btn btn-blue text-center"> <h4 style={{color:"white"}}> Submit </h4> </button>
                      <b>{assignResponse != null ? assignResponse : null}</b>

                     </div>
            </div>
        </div>
        <div class="bg-blue py-4">
            <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Add New Assign</small>
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
  addAssign: (creds) => dispatch(addAssign(creds)),

}
}

const mapStateToProps = (state) => {
return {
  assignResponse: state.assign.assignResponse
}
}
const style = {
display: 'flex',
justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(Addassign)
