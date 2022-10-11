import {
    addNewCourse,
    loadCoursesprofessor,
    loadSearchCoursesprofessor,
    loadSingleData
    ,editSingleData,
    deleteCourse,
    loadCoursesstudent
    } from '../services/CourseService'

export const addCourse = (credentials) =>{
    return (dispatch) =>{
       addNewCourse(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_COURSE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_COURSE_CODE_ERROR',error});
        }
        
        )
    }
}

export const loadCourseStudent = (page) =>{
    return (dispatch) =>{
        loadCoursesstudent(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_COURSES',res});
        },
        error=>{
            dispatch({type:'FETCH_COURSE_ERROR',error})
            console.log(error)
        }    
        )
    }
}

export const loadCourseProfessor = (page) =>{
    return (dispatch) =>{
        loadCoursesprofessor(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_COURSES',res});
        },
        error=>{
            dispatch({type:'FETCH_COURSE_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchCourseprofessor = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchCoursesprofessor(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_COURSES_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_COURSE_ERROR',error})
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


export const editCourseUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_COURSE_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_COURSE_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteCourseUser = (id) =>{
    return (dispatch) =>{
      deleteCourse(id).then((res)=>{
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