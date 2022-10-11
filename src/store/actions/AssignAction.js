import {
    addNewAssign,
    loadAssignsprofessor,
    loadSearchAssignsprofessor,
    loadSingleData
    ,editSingleData,
    deleteAssign,
    loadAssignsstudent
    } from '../services/AssignService'

export const addAssign = (credentials) =>{
    return (dispatch) =>{
       addNewAssign(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_ASSIGN_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_ASSIGN_CODE_ERROR',error});
        }
        
        )
    }
}

export const loadAssignStudent = (page) =>{
    return (dispatch) =>{
        loadAssignsstudent(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_ASSIGNS',res});
        },
        error=>{
            dispatch({type:'FETCH_ASSIGN_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadAssignProfessor = (page) =>{
    return (dispatch) =>{
        loadAssignsprofessor(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_ASSIGNS',res});
        },
        error=>{
            dispatch({type:'FETCH_ASSIGN_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchAssignprofessor = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchAssignsprofessor(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_ASSIGNS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_ASSIGN_ERROR',error})
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


export const editAssignUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_ASSIGN_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_ASSIGN_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteAssignUser = (id) =>{
    return (dispatch) =>{
      deleteAssign(id).then((res)=>{
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