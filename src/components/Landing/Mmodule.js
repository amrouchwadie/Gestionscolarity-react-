import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editModuleUser } from '../../store/actions/ModuleAction'

class Mmodule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name_module: '',
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleModules !== this.props.loadSingleModules) {
      let singleData = this.props.loadSingleModules;
      this.setState({
        name_module: singleData.data.name_module,
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

    this.props.editModuleUser(this.state, id);
  }



  render() {
    const { moduleResponse } = this.props;
    return (
      <div>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>

        <div class="wrapper fadeInDown">
          <div id="formContent">

            <h2 class="active">  Update </h2>


              <input type="text" id="name_module" class="fadeIn second" name="name_module" placeholder=" Name" 
               onChange={this.handleChange} value={this.state.name_module || ''}/>
               <input class="btn btn-primary" type="submit" value="Save Changes" />
              <b>{moduleResponse != null ? moduleResponse : null}</b>


            <div id="formFooter">
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
    loadSingleModules: state.module.loadSingleModules,
    moduleResponse: state.module.moduleResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editModuleUser: (credentials, id) => dispatch(editModuleUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mmodule)
