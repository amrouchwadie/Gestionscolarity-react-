import {
    addNewStudent,
    loadStudents,
    loadSearchStudents,
    loadSingleData
    ,editSingleData,
    deleteStudent,
    loadSingleDataprofile,
    loadfiltreStudents

    } from '../services/StudentService'

export const addStudentUser = (credentials) =>{
    return (dispatch) =>{
       addNewStudent(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_STUDENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_STUDENT_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadStudentUser = (page) =>{
    return (dispatch) =>{
        loadStudents(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_STUDENTS',res});
        },
        error=>{
            dispatch({type:'FETCH_STUDENT_ERROR',error})
            console.log(error)
        }    
        )
    }
}

export const loadfiltreStudentUser = (filtre,page) =>{
 
    return (dispatch) =>{
        loadfiltreStudents(filtre,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_STUDENTS_FILTRE',res});
        },
        error=>{
            dispatch({type:'FETCH_STUDENT_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadSearchStudentUser = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchStudents(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_STUDENTS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_STUDENT_ERROR',error})
            console.log(error)
        }    
        )
    }   
}

export const loadSingleprofile= (id) =>{
    
    return (dispatch) =>{
        loadSingleDataprofile(id).then((res)=>{
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


export const editStudentUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_STUDENT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_STUDENT_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteStudentUser = (id) =>{
    return (dispatch) =>{
      deleteStudent(id).then((res)=>{
            res.id = id;
                dispatch({type:'DATA_DELETE_SUCCESSFULLY',res})
        },
        error=>{
            dispatch({type:'DATA_DELETE_ERROR',error});
        }
        
        )
    }
}





