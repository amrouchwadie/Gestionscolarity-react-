const initState = {
    moduleResponse:null,
    moduleMessage:null,
    loadModules:null,
    loadSingleModules:null
};


const ModuleReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                moduleResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    moduleResponse:'loading...'
                }
        case 'NEW_MODULE_SUCCESS':
            console.log(action);
            return{
                ...state,
                moduleResponse: action.res.message
             }

           case 'NEW_MODULE_CODE_ERROR':
        return {
            ...state,
            moduleResponse:'error code'
        }
        case 'CLEAR_MODULES_STATE':
          return {
            ...state,
            loadModules:null
          }
        case 'LOAD_MODULES':
            console.log(action.res)
            return{
                ...state,
                loadModules:action.res
            }
      case 'LOAD_MODULES_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadModules:action.res
        }
            case 'FETCH_MODULE_ERROR':
                return{
                    ...state,
                    loadModules:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleModules:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleModules:action.error
                            }
                            case 'UPDATE_MODULE_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    moduleResponse: action.res.message
                                 }
                    
                               case 'UPDATE_MODULE_CODE_ERROR':
                            return {
                                ...state,
                                moduleResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadModules } = state;
                            let data = loadModules.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadModules.data.data = [];
                            data.map((mappingData)=>{
                                loadModules.data.data.push({
                                    "id":mappingData.id,
                                    "name_module":mappingData.name_module,
                                    "niveau_id":mappingData.niveau_id,
                            
                                })
                            })
                            return{
                                ...state,
                                loadModules:{...state.loadModules,loadModules}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                moduleResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default ModuleReducer;






