import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadDirectorsProfile,editDirector } from '../../store/actions/DirectorAction'
import DefaultImg from '../../image/default-img.png'

class UpdateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
          firstname: '',
          lastname: '',
          profile_image: '',
          telephone: '',
          email: '',
          file_directory: '',
          new_image: ''
        }
      }
      componentDidMount = () => {
        console.log(this.props);
        let token = localStorage.getItem('user');
        this.props.loadDirectorsProfile(token);
        
      }
    
      componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.loadSingleDirectors !== this.props.loadSingleDirectors) {
          let singleData = this.props.loadSingleDirectors;
          this.setState({
            firstname: singleData.data.firstname,
            lastname: singleData.data.lastname,
            new_image: singleData.data.photo,
            telephone: singleData.data.telephone,
            email: singleData.data.email,
            id : singleData.data.id,
            file_directory: singleData.file_directory
          })
        }
      }
    
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
    
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        console.log(this.state);
    
        this.props.editDirector(this.state, id);
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
    render() {
        const { directorResponse } = this.props;

      return (      
            <div>
              <form class="needs-validation" novalidate autoComplete="off" onSubmit={this.handleSubmit} >
                <div class="wrapper fadeInDown">
                  <div id="formContent">
      
                    <h2 class="active"> Update Your Profile </h2>
      
      
                    <div class="form-group">
                      <div className="form-group mb-4">
                        <label for="validationTooltip01">First name</label><br />
                        <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name"
                          onChange={this.handleChange} value={this.state.firstname } required />
                        <div className="valid-tooltip">
                          
            </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group mb-4">
                        <label for="validationTooltip02">Last name</label><br />
                        <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last name"
                          onChange={this.handleChange}  value={this.state.lastname }required />
                        <div className="valid-tooltip">
                          Looks good!
            </div>
                      </div>
                      
                    </div>
                    <div className="form-row">
      
                      <div class="form-group col-md-6">
                      <label for="validationTooltipUsername">Phone Number</label><br/>
                        <input type="text" name="telephone" className="form-control" id="telephone" placeholder="+212659895463"
                          onChange={this.handleChange}  value={this.state.telephone }required />
                        <div className="invalid-tooltip">
                          Please choose a unique and valid Phone.
              </div>
                      </div>
      
                      <div class="form-group col-md-6">
                      <label for="validationTooltipUsername">Email</label><br/>
                        <input type="email" name="telephone" className="form-control" id="email" placeholder="domain@gmail.com"
                          onChange={this.handleChange}  value={this.state.email } required />
                        <div className="invalid-tooltip">
                          Please choose a unique and valid Phone.
              </div>
                      </div>
      
      
      
                    </div>
      
      
      
      
                    <input type="file" id="photo" onChange={this.fileTransform} />
                    {
                       
                        <div>
                          {
                            this.state.new_image == "" ?
                              <img src={DefaultImg} className="image-restyle" />
                              : <img className="image-restyle" src={this.state.file_directory + "/" + this.state.new_image} />
                          }
        
                        </div>
                      
                    }
      
                    <div id="formFooter">
                      <input class="btn btn-primary" type="submit" value="Save" />
                      <b>{directorResponse != null ? directorResponse : null}</b>

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
      loadSingleDirectors: state.director.loadSingleDirectors,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        loadDirectorsProfile: () => dispatch(loadDirectorsProfile()),
        editDirector: (credentials, id) => dispatch(editDirector(credentials, id))

  
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)

