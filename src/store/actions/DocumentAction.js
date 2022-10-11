import {
    addNewDocument,
    loadDocuments,
    loadSearchDocuments,
    loadSingleData
    ,editSingleData,
    deleteDocument,
    loadDocumentsall,
    loadSearchDocumentsall
    } from '../services/DocumentService'

export const addDocument = (credentials) =>{
    return (dispatch) =>{
       addNewDocument(credentials).then((res)=>{
                dispatch({type:'NEW_DOCUMENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_DOCUMENT_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadDocumentUser = (id,page) =>{
    return (dispatch) =>{
        loadDocuments(id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTS',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENT_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchDocumentUser = (search_content,id,page) =>{
 
    return (dispatch) =>{
        loadSearchDocuments(search_content,id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENT_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadDocumentall = (page) =>{
    return (dispatch) =>{
        loadDocumentsall(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTS',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENT_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchDocumentall = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchDocumentsall(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENT_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadSingleDataUser= (id) =>{
    
    return (dispatch) =>{
        loadSingleData(id).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_SINGLE_DATA',res});
        },
        error=>{
            dispatch({type:'FETCH_SINGLE_DATA_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const editDocumentUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_DOCUMENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_DOCUMENT_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteDocumentUser = (id) =>{
    return (dispatch) =>{
      deleteDocument(id).then((res)=>{
            console.log(res);
            res.id = id;
                dispatch({type:'DATA_DELETE_SUCCESSFULLY',res})
        },
        error=>{
            dispatch({type:'DATA_DELETE_ERROR',error});
        }
        
        )
    }
}