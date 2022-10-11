const initState = {
    assigndocumentResponse:null,
    assigndocumentMessage:null,
    loadAssignsdocumentt:null,
    loadSingleAssignsdocument:null
};


const AssigndocumentReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                assigndocumentResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    assigndocumentResponse:'loading...'
                }
        case 'NEW_ASSIGNDOCUMENT_SUCCESS':
            console.log(action);
            return{
                ...state,
                assigndocumentResponse: action.res.message
             }

           case 'NEW_ASSIGNDOCUMENT_CODE_ERROR':
        return {
            ...state,
            assigndocumentResponse:'error code'
        }
        case 'CLEAR_ASSIGNSDOCUMENT_STATE':
          return {
            ...state,
            loadAssignsdocumentt:null
          }
        case 'LOAD_ASSIGNSDOCUMENT':
            console.log(action.res)
            return{
                ...state,
                loadAssignsdocumentt:action.res
            }
      case 'LOAD_ASSIGNSDOCUMENT_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadAssignsdocumentt:action.res
        }
            case 'FETCH_ASSIGNDOCUMENT_ERROR':
                return{
                    ...state,
                    loadAssignsdocumentt:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleAssignsdocument:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleAssignsdocument:action.error
                            }
                            case 'UPDATE_ASSIGNDOCUMENT_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    assigndocumentResponse: action.res.message
                                 }
                    
                               case 'UPDATE_ASSIGNDOCUMENT_CODE_ERROR':
                            return {
                                ...state,
                                assigndocumentResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadAssignsdocumentt } = state;
                            let data = loadAssignsdocumentt.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadAssignsdocumentt.data.data = [];
                            data.map((mappingData)=>{
                                loadAssignsdocumentt.data.data.push({
                                    "id":mappingData.id,
                                    "name_doc":mappingData.name_doc,
                                    "student_id":mappingData.student_id,
                                    "assign_id":mappingData.assign_id,
                                    "chifre_answer":mappingData.chifre_answer,
                                })
                            })
                            return{
                                ...state,
                                loadAssignsdocumentt:{...state.loadAssignsdocumentt,loadAssignsdocumentt}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                assigndocumentResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default AssigndocumentReducer;






