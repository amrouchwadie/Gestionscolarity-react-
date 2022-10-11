import {
    addNewFiliere,
    loadFilieres,
    loadSearchFilieres,
    loadSingleData
    ,editSingleData,
    deleteFiliere
    } from '../services/FiliereService'

export const addFiliere = (credentials) =>{
    return (dispatch) =>{
       addNewFiliere(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_FILIERE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_FILIERE_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadFiliereUser = (page) =>{
    return (dispatch) =>{
        loadFilieres(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_FILIERES',res});
        },
        error=>{
            dispatch({type:'FETCH_FILIERE_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchFiliereUser = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchFilieres(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_FILIERES_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_FILIERE_ERROR',error})
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


export const editFiliereUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_FILIERE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_FILIERE_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteFiliereUser = (id) =>{
    return (dispatch) =>{
      deleteFiliere(id).then((res)=>{
            console.log(res);
            res.id = id;
                dispatch({type:'DATA_DELETE_SUCCESSFULLY',res});
                
        },
        error=>{
            dispatch({type:'DATA_DELETE_ERROR',error});
        }
        
        )
    }
}