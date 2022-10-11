import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ProfessorReducer from './ProfessorReducer'
import LibraryReducer from './LibraryReducer'
import FiliereReducer from './FiliereReducer'
import NiveauReducer from './NiveauReducer'
import ModuleReducer from './ModuleReducer'
import StudentReducer from './StudentReducer'
import CourseReducer from './CourseReducer'
import DirectorReducer from './DirectorReducer'
import DocumentReducer from './DocumentReducer'
import AssignReducer from './AssignReducer'
import DocumentDutyReducer from './DocumentDutyReducer'
import AssigndocumentReducer from './AssigndocumentReducer'


const RootReducer = combineReducers({
    auth :AuthReducer,
    professor :ProfessorReducer,
    book :LibraryReducer,
    filiere :FiliereReducer,
    niveau :NiveauReducer,
    module :ModuleReducer,
    student :StudentReducer,
    course :CourseReducer,
    director :DirectorReducer,
    document :DocumentReducer,
    assign :AssignReducer,
    documentduty :DocumentDutyReducer,
    assigndocument:AssigndocumentReducer,




    
})

export default RootReducer