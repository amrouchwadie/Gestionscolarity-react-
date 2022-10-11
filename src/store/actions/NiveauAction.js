import {
    addNewNiveau,
    loadNiveaus,
    loadSearchNiveaus,
    loadSingleData
    ,editSingleData,
    deleteNiveau,
    loadSearchallNiveaus,
    loadallNiveaus


    } from '../services/NiveauService'

export const addNiveau = (credentials) =>{
    return (dispatch) =>{
       addNewNiveau(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_NIVEAU_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_NIVEAU_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadNiveauUser = (id,page) =>{
    return (dispatch) =>{
        loadNiveaus(id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_NIVEAUS',res});
        },
        error=>{
            dispatch({type:'FETCH_NIVEAU_ERROR',error})
            console.log(error)
        }    
        )
    }
}

export const loadNiveauall = (page) =>{
    return (dispatch) =>{
        loadallNiveaus(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_NIVEAUS',res});
        },
        error=>{
            dispatch({type:'FETCH_NIVEAU_ERROR',error})
            console.log(error)
        }    
        )
    }
}
export const loadSearchNiveauall = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchallNiveaus(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_NIVEAUS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_NIVEAU_ERROR',error})
            console.log(error)
        }    
        )
    }   
}
export const loadSearchNiveauUser = (search_content,id,page) =>{
 
    return (dispatch) =>{
        loadSearchNiveaus(search_content,id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_NIVEAUS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_NIVEAU_ERROR',error})
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


export const editNiveauUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_NIVEAU_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_NIVEAU_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteNiveauUser = (id) =>{
    return (dispatch) =>{
      deleteNiveau(id).then((res)=>{
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