import {
    addNewProfessor,
    loadProfessors,
    loadSearchProfessors,
    loadSingleData
    ,editSingleData,
    deleteProfessor
    } from '../services/ProfessorService'

export const addProfessorUser = (credentials) =>{
    return (dispatch) =>{
       addNewProfessor(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_PROFESSOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_PROFESSOR_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadProfessorUser = (page) =>{
    return (dispatch) =>{
        loadProfessors(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_PROFESSORS',res});
        },
        error=>{
            dispatch({type:'FETCH_PROFESSOR_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchProfessorUser = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchProfessors(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_PROFESSORS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_PROFESSOR_ERROR',error})
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


export const editProfessorUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_PROFESSOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_PROFESSOR_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteProfessorUser = (id) =>{
    return (dispatch) =>{
      deleteProfessor(id).then((res)=>{
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



