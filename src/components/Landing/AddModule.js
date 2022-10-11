import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addModule } from '../../store/actions/ModuleAction'


class AddModule extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name_module: '',
      niveau_id : this.props.match.params.id
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
    this.props.addModule(this.state)
  }

  render() {
    const { moduleResponse } = this.props;
    return (

      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="wrapper fadeInDown">
            <div id="formContent">

              <h2 class="active"> Creation </h2>


              <input type="text" id="name_module" class="fadeIn second" name="name_module" placeholder="Branch Name"  onChange={this.handleChange} />
              <input class="btn btn-primary" type="submit" value="Submit" />
              <b>{moduleResponse != null ? moduleResponse : null}</b>



            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addModule: (creds) => dispatch(addModule(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    moduleResponse: state.module.moduleResponse
  }
}
const style = {
  display: 'flex',
  justifyContent: 'center'
}



export default connect(mapStateToProps, mapDisPatchToProps)(AddModule)
