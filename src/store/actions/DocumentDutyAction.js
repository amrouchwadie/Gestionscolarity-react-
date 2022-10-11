import {
    addNewDocumentDuty,
    loadDocumentsDuty,
    loadSearchDocumentsDuty,
    loadSingleData
    ,editSingleData,
    deleteDocumentDuty,
    loadDocumentsDutyall,
    loadSearchDocumentsDutyall
    } from '../services/DocumentDutyService'

export const addDocumentDuty = (credentials) =>{
    return (dispatch) =>{
       addNewDocumentDuty(credentials).then((res)=>{
                dispatch({type:'NEW_DOCUMENTDUTY_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_DOCUMENTDUTY_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadDocumentDutyUser = (id,page) =>{
    return (dispatch) =>{
        loadDocumentsDuty(id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTSDUTY',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENTDUTY_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchDocumentDutyUser = (search_content,id,page) =>{
 
    return (dispatch) =>{
        loadSearchDocumentsDuty(search_content,id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTSDUTY_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENTDUTY_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadDocumentDutyall = (page) =>{
    return (dispatch) =>{
        loadDocumentsDutyall(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTSDUTY',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENTDUTY_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchDocumentDutyall = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchDocumentsDutyall(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DOCUMENTSDUTY_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_DOCUMENTDUTY_ERROR',error})
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


export const editDocumentDutyUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_DOCUMENTDUTY_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_DOCUMENTDUTY_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteDocumentDutyUser = (id) =>{
    return (dispatch) =>{
      deleteDocumentDuty(id).then((res)=>{
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