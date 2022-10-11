const initState = {
    filiereResponse:null,
    filiereMessage:null,
    loadFilieres:null,
    loadSingleFilieres:null
};


const FiliereReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                filiereResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    filiereResponse:'loading...'
                }
        case 'NEW_FILIERE_SUCCESS':
            console.log(action);
            return{
                ...state,
                filiereResponse: action.res.message
             }

           case 'NEW_FILIERE_CODE_ERROR':
        return {
            ...state,
            filiereResponse:'error code'
        }
        case 'CLEAR_FILIERES_STATE':
          return {
            ...state,
            loadFilieres:null
          }
        case 'LOAD_FILIERES':
            console.log(action.res)
            return{
                ...state,
                loadFilieres:action.res
            }
      case 'LOAD_FILIERES_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadFilieres:action.res
        }
            case 'FETCH_FILIERE_ERROR':
                return{
                    ...state,
                    loadFilieres:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleFilieres:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleFilieres:action.error
                            }
                            case 'UPDATE_FILIERE_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    filiereResponse: action.res.message
                                 }
                    
                               case 'UPDATE_FILIERE_CODE_ERROR':
                            return {
                                ...state,
                                filiereResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadFilieres } = state;
                            let data = loadFilieres.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadFilieres.data.data = [];
                            data.map((mappingData)=>{
                                loadFilieres.data.data.push({
                                    "id":mappingData.id,
                                    "name_filiere":mappingData.name_filiere,
                                    "designation_filiere":mappingData.designation_filiere,
                                    

                                })
                            })
                            return{
                                ...state,
                                loadFilieres:{...state.loadFilieres,loadFilieres}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                filiereResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default FiliereReducer;