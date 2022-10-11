const initState = {
    documentResponse:null,
    documentMessage:null,
    loadDocuments:null,
    loadSingleDocuments:null
};


const DocumentReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                documentResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    documentResponse:'loading...'
                }
        case 'NEW_DOCUMENT_SUCCESS':
            return{
                ...state,
                documentResponse: action.res.message
             }

           case 'NEW_DOCUMENT_CODE_ERROR':
        return {
            ...state,
            documentResponse:'error code'
        }
        case 'CLEAR_DOCUMENTS_STATE':
          return {
            ...state,
            loadDocuments:null
          }
        case 'LOAD_DOCUMENTS':
            console.log(action.res)
            return{
                ...state,
                loadDocuments:action.res
            }
      case 'LOAD_DOCUMENTS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadDocuments:action.res
        }
            case 'FETCH_DOCUMENT_ERROR':
                return{
                    ...state,
                    loadDocuments:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleDocuments:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleDocuments:action.error
                            }
                            case 'UPDATE_DOCUMENT_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    documentResponse: action.res.message
                                 }
                    
                               case 'UPDATE_DOCUMENT_CODE_ERROR':
                            return {
                                ...state,
                                documentResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadDocuments } = state;
                            let data = loadDocuments.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadDocuments.data.data = [];
                            data.map((mappingData)=>{
                                loadDocuments.data.data.push({
                                    "id":mappingData.id,
                                    "course_id":mappingData.course_id,
                                    "name_doc":mappingData.name_doc,
                                    "path_doc":mappingData.path_doc,
                                    "description_doc":mappingData.description_doc,
                            
                                })
                            })
                            return{
                                ...state,
                                loadDocuments:{...state.loadDocuments,loadDocuments}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                documentResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default DocumentReducer;






