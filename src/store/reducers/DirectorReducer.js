const initState = {
    directorResponse:null,
    directorMessage:null,
    loadDirectors:null,
    loadSingleDirectors:null
};


const DirectorReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                directorResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    directorResponse:'loading...'
                }
        case 'NEW_DIRECTOR_SUCCESS':
            console.log(action);
            return{
                ...state,
                directorResponse: action.res.message
             }

           case 'NEW_DIRECTOR_CODE_ERROR':
        return {
            ...state,
            directorResponse:'error code'
        }
        case 'CLEAR_DIRECTORS_STATE':
          return {
            ...state,
            loadDirectors:null
          }
        case 'LOAD_DIRECTORS':
            console.log(action.res)
            return{
                ...state,
                loadDirectors:action.res
            }
      case 'LOAD_DIRECTORS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadDirectors:action.res
        }
            case 'FETCH_DIRECTOR_ERROR':
                return{
                    ...state,
                    loadDirectors:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleDirectors:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleDirectors:action.error
                            }
                            case 'UPDATE_DIRECTOR_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    directorResponse: action.res.message
                                 }
                    
                               case 'UPDATE_DIRECTOR_CODE_ERROR':
                            return {
                                ...state,
                                directorResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadDirectors } = state;
                            let data = loadDirectors.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadDirectors.data.data = [];
                            data.map((mappingData)=>{
                                loadDirectors.data.data.push({
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
                                loadDirectors:{...state.loadDirectors,loadDirectors}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                directorResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default DirectorReducer;