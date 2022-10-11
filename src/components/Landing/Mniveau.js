import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSingleDataUser, editNiveauUser } from '../../store/actions/NiveauAction'

class Mniveau extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name_niveau: '',
    }
  }

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.loadSingleDataUser(id);
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.loadSingleNiveaus !== this.props.loadSingleNiveaus) {
      let singleData = this.props.loadSingleNiveaus;
      this.setState({
        name_niveau: singleData.data.name_niveau,
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

    this.props.editNiveauUser(this.state, id);
  }



  render() {
    const { niveauResponse } = this.props;
    return (
      <div>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>

        <div class="wrapper fadeInDown">
          <div id="formContent">

            <h2 class="active">  Update </h2>


              <input type="text" id="name_niveau" class="fadeIn second" name="name_niveau" placeholder=" Name" 
               onChange={this.handleChange} value={this.state.name_niveau || ''}/>
               <input class="btn btn-primary" type="submit" value="Save Changes" />
              <b>{niveauResponse != null ? niveauResponse : null}</b>


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
    loadSingleNiveaus: state.niveau.loadSingleNiveaus,
    niveauResponse: state.niveau.niveauResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
    editNiveauUser: (credentials, id) => dispatch(editNiveauUser(credentials, id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mniveau)
