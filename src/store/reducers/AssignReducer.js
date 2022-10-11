const initState = {
    assignResponse:null,
    assignMessage:null,
    loadAssigns:null,
    loadSingleAssigns:null
};


const AssignReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                assignResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    assignResponse:'loading...'
                }
        case 'NEW_ASSIGN_SUCCESS':
            console.log(action);
            return{
                ...state,
                assignResponse: action.res.message
             }

           case 'NEW_ASSIGN_CODE_ERROR':
        return {
            ...state,
            assignResponse:'error code'
        }
        case 'CLEAR_ASSIGNS_STATE':
          return {
            ...state,
            loadAssigns:null
          }
        case 'LOAD_ASSIGNS':
            console.log(action.res)
            return{
                ...state,
                loadAssigns:action.res
            }
      case 'LOAD_ASSIGNS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadAssigns:action.res
        }
            case 'FETCH_ASSIGN_ERROR':
                return{
                    ...state,
                    loadAssigns:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleAssigns:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleAssigns:action.error
                            }
                            case 'UPDATE_ASSIGN_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    assignResponse: action.res.message
                                 }
                    
                               case 'UPDATE_ASSIGN_CODE_ERROR':
                            return {
                                ...state,
                                assignResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadAssigns } = state;
                            let data = loadAssigns.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadAssigns.data.data = [];
                            data.map((mappingData)=>{
                                loadAssigns.data.data.push({
                                    "id":mappingData.id,
                                    "professor_id":mappingData.professor_id,
                                    "code_niveau":mappingData.code_niveau,
                                    "code_module":mappingData.code_module,
                                    "visibility_assign":mappingData.visibility_assign,
                                    "title_assign":mappingData.title_assign,
                            
                                })
                            })
                            return{
                                ...state,
                                loadAssigns:{...state.loadAssigns,loadAssigns}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                assignResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default AssignReducer;






