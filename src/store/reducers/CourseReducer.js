const initState = {
    courseResponse:null,
    courseMessage:null,
    loadCourses:null,
    loadSingleCourses:null
};


const CourseReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                courseResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    courseResponse:'loading...'
                }
        case 'NEW_COURSE_SUCCESS':
            console.log(action);
            return{
                ...state,
                courseResponse: action.res.message
             }

           case 'NEW_COURSE_CODE_ERROR':
        return {
            ...state,
            courseResponse:'error code'
        }
        case 'CLEAR_COURSES_STATE':
          return {
            ...state,
            loadCourses:null
          }
        case 'LOAD_COURSES':
            console.log(action.res)
            return{
                ...state,
                loadCourses:action.res
            }
      case 'LOAD_COURSES_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadCourses:action.res
        }
            case 'FETCH_COURSE_ERROR':
                return{
                    ...state,
                    loadCourses:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleCourses:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleCourses:action.error
                            }
                            case 'UPDATE_COURSE_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    courseResponse: action.res.message
                                 }
                    
                               case 'UPDATE_COURSE_CODE_ERROR':
                            return {
                                ...state,
                                courseResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadCourses } = state;
                            let data = loadCourses.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadCourses.data.data = [];
                            data.map((mappingData)=>{
                                loadCourses.data.data.push({
                                    "id":mappingData.id,
                                    "professor_id":mappingData.professor_id,
                                    "code_niveau":mappingData.code_niveau,
                                    "code_module":mappingData.code_module,
                                    "visibility_course":mappingData.visibility_course,
                                    "title_course":mappingData.title_course,
                            
                                })
                            })
                            return{
                                ...state,
                                loadCourses:{...state.loadCourses,loadCourses}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                courseResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default CourseReducer;






