const initState = {
    professorResponse:null,
    professorMessage:null,
    loadProfessors:null,
    loadSingleProfessors:null
};


const ProfessorReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                professorResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    professorResponse:'loading...'
                }
        case 'NEW_PROFESSOR_SUCCESS':
            console.log(action);
            return{
                ...state,
                professorResponse: action.res.message
             }

           case 'NEW_PROFESSOR_CODE_ERROR':
        return {
            ...state,
            professorResponse:'error code'
        }
        case 'CLEAR_PROFESSORS_STATE':
          return {
            ...state,
            loadProfessors:null
          }
        case 'LOAD_PROFESSORS':
            console.log(action.res)
            return{
                ...state,
                loadProfessors:action.res
            }
      case 'LOAD_PROFESSORS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadProfessors:action.res
        }
            case 'FETCH_PROFESSOR_ERROR':
                return{
                    ...state,
                    loadProfessors:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleProfessors:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleProfessors:action.error
                            }
                            case 'UPDATE_PROFESSOR_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    professorResponse: action.res.message
                                 }
                    
                               case 'UPDATE_PROFESSOR_CODE_ERROR':
                            return {
                                ...state,
                                professorResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadProfessors } = state;
                            let data = loadProfessors.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadProfessors.data.data = [];
                            data.map((mappingData)=>{
                                loadProfessors.data.data.push({
                                    "id":mappingData.id,
                                    "firstname":mappingData.firstname,
                                    "lastname":mappingData.lastname,
                                    "email":mappingData.email,
                                    "photo":mappingData.photo,
                                    "type":mappingData.type,
                                    "telephone":mappingData.telephone,
                                    "password":mappingData.password,

                                })
                            })
                            return{
                                ...state,
                                loadProfessors:{...state.loadProfessors,loadProfessors}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                professorResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default ProfessorReducer;