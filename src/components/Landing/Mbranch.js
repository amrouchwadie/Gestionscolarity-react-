import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editFiliereUser } from '../../store/actions/FiliereAction'

class Mbranch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name_filiere: '',
      designation_filiere: '',
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleFilieres !== this.props.loadSingleFilieres) {
      let singleData = this.props.loadSingleFilieres;
      this.setState({
        name_filiere: singleData.data.name_filiere,
        designation_filiere: singleData.data.designation_filiere,
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

    this.props.editFiliereUser(this.state, id);
  }



  render() {
    const { filiereResponse } = this.props;
    return (
      <div>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>

        <div class="wrapper fadeInDown">
          <div id="formContent">

            <h2 class="active"> Branch Update </h2>


              <input type="text" id="name_filiere" class="fadeIn second" name="name_filiere" placeholder="Branch Name" 
               onChange={this.handleChange} value={this.state.name_filiere || ''}/>
              <input type="text" id="designation_filiere" class="fadeIn third" name="designation_filiere" placeholder="Speciality" 
               onChange={this.handleChange} value={this.state.designation_filiere || ''}/>
              <input class="btn btn-primary" type="submit" value="Save Changes" />
              <b>{filiereResponse != null ? filiereResponse : null}</b>


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
    loadSingleFilieres: state.filiere.loadSingleFilieres,
    filiereResponse: state.filiere.filiereResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editFiliereUser: (credentials, id) => dispatch(editFiliereUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mbranch)
