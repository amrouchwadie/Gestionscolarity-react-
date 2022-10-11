const initState = {
    studentResponse :null,
    studentMessage:null,
    loadStudents:null,
    loadSingleStudents:null
};


const StudentReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                studentResponse :null
            }
            case 'LOADING':
                return {
                    ...state,
                    studentResponse :'loading...'
                }
        case 'NEW_STUDENT_SUCCESS':
            console.log(action);
            return{
                ...state,
                studentResponse : action.res.message
             }

           case 'NEW_STUDENT_CODE_ERROR':
        return {
            ...state,
            studentResponse :'error code'
        }
        case 'CLEAR_STUDENTS_STATE':
          return {
            ...state,
            loadStudents:null
          }
        case 'LOAD_STUDENTS':
            console.log(action.res)
            return{
                ...state,
                loadStudents:action.res
            }
      case 'LOAD_STUDENTS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadStudents:action.res
        }
        case 'LOAD_STUDENTS_FILTRE':
            console.log(action.res)
        return{
            ...state,
            loadStudents:action.res
        }
            case 'FETCH_STUDENT_ERROR':
                return{
                    ...state,
                    loadStudents:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleStudents:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleStudents:action.error
                            }
                            case 'UPDATE_STUDENT_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    studentResponse : action.res.message
                                 }
                    
                               case 'UPDATE_STUDENT_CODE_ERROR':
                            return {
                                ...state,
                                studentResponse :action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadStudents } = state;
                            let data = loadStudents.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadStudents.data.data = [];
                            data.map((mappingData)=>{
                                loadStudents.data.data.push({
                                    "id":mappingData.id,
                                    "firstname_std":mappingData.firstname_std,
                                    "lastname_std":mappingData.lastname_std,
                                    "email_std":mappingData.email_std,
                                    "photo_std":mappingData.photo_std,
                                    "code_std":mappingData.code_std,
                                    "telephone_std":mappingData.telephone,
                                    "code_filiere":mappingData.code_filiere,
                                    "code_niveau":mappingData.code_niveau,

                                })
                            })
                            return{
                                ...state,
                                loadStudents:{...state.loadStudents,loadStudents}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                studentResponse :action.error
                            }
        default:
                return state
    }
      
    
}

export default StudentReducer;