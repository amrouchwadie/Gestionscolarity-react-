import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFiliere } from '../../store/actions/FiliereAction'


class Archive extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name_filiere: '',
      designation_filiere: '',


    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

 

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addFiliere(this.state)
  }

  render() {
    const { filiereResponse } = this.props;
    return (

      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Branch Creation </h2>


              <input type="text" id="name_filiere" class="fadeIn second" name="name_filiere" placeholder="Branch Name"  onChange={this.handleChange} />
              <input type="text" id="designation_filiere" class="fadeIn third" name="designation_filiere" placeholder="Designation" onChange={this.handleChange}  />
              <input class="btn btn-primary" type="submit" value="Submit" />
              <b>{filiereResponse != null ? filiereResponse : null}</b>



            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addFiliere: (creds) => dispatch(addFiliere(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    filiereResponse: state.filiere.filiereResponse
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(Archive)
