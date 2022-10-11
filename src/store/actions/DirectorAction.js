import {
    addNewDirector,
    loadDirectors,
    loadSearchDirectors,
    loadSingleData
    ,editSingleData,
    deleteDirector,
    loadDirectorProfile,
    editdirectorProfile,
    editdirectorpassword
    } from '../services/DirectorService'

export const addDirectorUser = (credentials) =>{
    return (dispatch) =>{
       addNewDirector(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_DIRECTOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_DIRECTOR_CODE_ERROR',error});
        }
        
        )
    }
}


export const loadDirectorsProfile = (token) =>{
    return (dispatch) =>{
        loadDirectorProfile(token).then((res)=>{
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
export const loadDirectorUser = (page) =>{
    return (dispatch) =>{
        loadDirectors(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DIRECTORS',res});
        },
        error=>{
            dispatch({type:'FETCH_DIRECTOR_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchDirectorUser = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchDirectors(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_DIRECTORS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_DIRECTOR_ERROR',error})
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

export const editDirector = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
        editdirectorProfile(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_DIRECTOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_DIRECTOR_CODE_ERROR',error});
        }
        
        )
    }
}

export const editDirectorpassword = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
        editdirectorpassword(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_DIRECTOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_DIRECTOR_CODE_ERROR',error});
        }
        
        )
    }
}

export const editDirectorUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_DIRECTOR_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_DIRECTOR_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteDirectorUser = (id) =>{
    return (dispatch) =>{
      deleteDirector(id).then((res)=>{
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



