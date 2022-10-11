const initState = {
    niveauResponse:null,
    niveauMessage:null,
    loadNiveaus:null,
    loadSingleNiveaus:null
};


const NiveauReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                niveauResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    niveauResponse:'loading...'
                }
        case 'NEW_NIVEAU_SUCCESS':
            console.log(action);
            return{
                ...state,
                niveauResponse: action.res.message
             }

           case 'NEW_NIVEAU_CODE_ERROR':
        return {
            ...state,
            niveauResponse:'error code'
        }
        case 'CLEAR_NIVEAUS_STATE':
          return {
            ...state,
            loadNiveaus:null
          }
        case 'LOAD_NIVEAUS':
            console.log(action.res)
            return{
                ...state,
                loadNiveaus:action.res
            }
      case 'LOAD_NIVEAUS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadNiveaus:action.res
        }
            case 'FETCH_NIVEAU_ERROR':
                return{
                    ...state,
                    loadNiveaus:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleNiveaus:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleNiveaus:action.error
                            }
                            case 'UPDATE_NIVEAU_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    niveauResponse: action.res.message
                                 }
                    
                               case 'UPDATE_NIVEAU_CODE_ERROR':
                            return {
                                ...state,
                                niveauResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadNiveaus } = state;
                            let data = loadNiveaus.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadNiveaus.data.data = [];
                            data.map((mappingData)=>{
                                loadNiveaus.data.data.push({
                                    "id":mappingData.id,
                                    "name_niveau":mappingData.name_niveau,
                                    "filiere_id":mappingData.filiere_id,
                            
                                })
                            })
                            return{
                                ...state,
                                loadNiveaus:{...state.loadNiveaus,loadNiveaus}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                niveauResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default NiveauReducer;






