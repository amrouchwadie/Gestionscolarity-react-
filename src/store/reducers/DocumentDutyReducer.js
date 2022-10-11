const initState = {
    documentDutyResponse:null,
    documentDutyMessage:null,
    loadDocumentsDuty:null,
    loadSingleDocumentsDuty:null
};


const DocumentDutyReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                documentDutyResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    documentDutyResponse:'loading...'
                }
        case 'NEW_DOCUMENTDUTY_SUCCESS':
            return{
                ...state,
                documentDutyResponse: action.res.message
             }

           case 'NEW_DOCUMENTDUTY_CODE_ERROR':
        return {
            ...state,
            documentDutyResponse:'error code'
        }
        case 'CLEAR_DOCUMENTSDUTY_STATE':
          return {
            ...state,
            loadDocumentsDuty:null
          }
        case 'LOAD_DOCUMENTSDUTY':
            console.log(action.res)
            return{
                ...state,
                loadDocumentsDuty:action.res
            }
      case 'LOAD_DOCUMENTSDUTY_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadDocumentsDuty:action.res
        }
            case 'FETCH_DOCUMENTDUTY_ERROR':
                return{
                    ...state,
                    loadDocumentsDuty:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleDocumentsDuty:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleDocumentsDuty:action.error
                            }
                            case 'UPDATE_DOCUMENTDUTY_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    documentDutyResponse: action.res.message
                                 }
                    
                               case 'UPDATE_DOCUMENTDUTY_CODE_ERROR':
                            return {
                                ...state,
                                documentDutyResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadDocumentsDuty } = state;
                            let data = loadDocumentsDuty.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadDocumentsDuty.data.data = [];
                            data.map((mappingData)=>{
                                loadDocumentsDuty.data.data.push({
                                    "id":mappingData.id,
                                    "assign_id":mappingData.assign_id,
                                    "name_doc":mappingData.name_doc,
                                    "path_doc":mappingData.path_doc,
                                    "description_doc":mappingData.description_doc,
                            
                                })
                            })
                            return{
                                ...state,
                                loadDocumentsDuty:{...state.loadDocumentsDuty,loadDocumentsDuty}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                documentDutyResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default DocumentDutyReducer;






