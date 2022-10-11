import {
    addNewModule,
    loadModules,
    loadSearchModules,
    loadSingleData
    ,editSingleData,
    deleteModule,
    loadModulesall,
    loadSearchModulesall
    } from '../services/ModuleService'

export const addModule = (credentials) =>{
    return (dispatch) =>{
       addNewModule(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_MODULE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_MODULE_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadModuleUser = (id,page) =>{
    return (dispatch) =>{
        loadModules(id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_MODULES',res});
        },
        error=>{
            dispatch({type:'FETCH_MODULE_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchModuleUser = (search_content,id,page) =>{
 
    return (dispatch) =>{
        loadSearchModules(search_content,id,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_MODULES_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_MODULE_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadModuleall = (page) =>{
    return (dispatch) =>{
        loadModulesall(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_MODULES',res});
        },
        error=>{
            dispatch({type:'FETCH_MODULE_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchModuleall = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchModulesall(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_MODULES_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_MODULE_ERROR',error})
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


export const editModuleUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_MODULE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_MODULE_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteModuleUser = (id) =>{
    return (dispatch) =>{
      deleteModule(id).then((res)=>{
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