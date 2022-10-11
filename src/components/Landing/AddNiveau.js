import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNiveau } from '../../store/actions/NiveauAction'


class AddNiveau extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name_niveau: '',
      filiere_id : this.props.match.params.id
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
    this.props.addNiveau(this.state)
  }

  render() {
    const { niveauResponse } = this.props;
    return (

      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active">  Creation </h2>


              <input type="text" id="name_niveau" class="fadeIn second" name="name_niveau" placeholder="Year Name"  onChange={this.handleChange} />
              <input class="btn btn-primary" type="submit" value="Submit" />
              <b>{niveauResponse != null ? niveauResponse : null}</b>



            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addNiveau: (creds) => dispatch(addNiveau(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    niveauResponse: state.niveau.niveauResponse
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(AddNiveau)
