import {
    addNewDocumentanswer,
    loadAssignsdocumentt,
    loadSingleData,
    editSingleData,
    deleteDocumentanswer
    } from '../services/AnsswerAssignService'

export const addAssigndocument = (credentials) =>{
    return (dispatch) =>{
        addNewDocumentanswer(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_ASSIGNDOCUMENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_ASSIGNDOCUMENT_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadAssigndocument = (id,token) =>{
    return (dispatch) =>{
        loadAssignsdocumentt(id,token).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_ASSIGNSDOCUMENT',res});
        },
        error=>{
            dispatch({type:'FETCH_ASSIGNDOCUMENT_ERROR',error})
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


export const editAssigndocumentUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_ASSIGNDOCUMENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_ASSIGNDOCUMENT_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteAssigndocumentUser = (id) =>{
    return (dispatch) =>{
        deleteDocumentanswer(id).then((res)=>{
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