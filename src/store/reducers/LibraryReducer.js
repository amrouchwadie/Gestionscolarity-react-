const initState = {
    bookResponse:null,
    bookMessage:null,
    loadBooks:null,
    loadSingleBooks:null
};


const LibraryReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                bookResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    bookResponse:'loading...'
                }
        case 'NEW_BOOK_SUCCESS':
            console.log(action);
            return{
                ...state,
                bookResponse: action.res.message
             }

           case 'NEW_BOOK_CODE_ERROR':
        return {
            ...state,
            bookResponse:'error code'
        }
        case 'CLEAR_BOOKS_STATE':
          return {
            ...state,
            loadBooks:null
          }
        case 'LOAD_BOOKS':
            console.log(action.res)
            return{
                ...state,
                loadBooks:action.res
            }
      case 'LOAD_BOOKS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadBooks:action.res
        }
            case 'FETCH_BOOK_ERROR':
                return{
                    ...state,
                    loadBooks:action.error
                }
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleBooks:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleBooks:action.error
                            }
                            case 'UPDATE_BOOK_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    bookResponse: action.res.message
                                 }
                    
                               case 'UPDATE_BOOK_CODE_ERROR':
                            return {
                                ...state,
                                bookResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadBooks } = state;
                            let data = loadBooks.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadBooks.data.data = [];
                            data.map((mappingData)=>{
                                loadBooks.data.data.push({
                                    "id":mappingData.id,
                                    "book_name":mappingData.book_name,
                                    "domain":mappingData.domain,
                                    "author":mappingData.author,
                                    "publication_date":mappingData.publication_date,
                                    "nbr_page":mappingData.nbr_page,
                                    "photo":mappingData.photo,
                                    "figure_book":mappingData.figure_book,

                                })
                            })
                            return{
                                ...state,
                                loadBooks:{...state.loadBooks,loadBooks}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                bookResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default LibraryReducer;













