import {
    addNewBook,
    loadBooks,
    loadSearchBooks,
    loadSingleData
    ,editSingleData,
    deleteBook
    } from '../services/LibraryService'

export const addBook = (credentials) =>{
    return (dispatch) =>{
       addNewBook(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_BOOK_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_BOOK_CODE_ERROR',error});
        }
        
        )
    }
}



export const loadBookUser = (page) =>{
    return (dispatch) =>{
        loadBooks(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_BOOKS',res});
        },
        error=>{
            dispatch({type:'FETCH_BOOK_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchBookUser = (search_content,page) =>{
 
    return (dispatch) =>{
        loadSearchBooks(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_BOOKS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_BOOK_ERROR',error})
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


export const editBookUser = (credentials,id) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
      editSingleData(credentials,id).then((res)=>{
            console.log(res);
                dispatch({type:'UPDATE_BOOK_SUCCESS',res})
        },
        error=>{
            dispatch({type:'UPDATE_BOOK_CODE_ERROR',error});
        }
        
        )
    }
}

export const deleteBookUser = (id) =>{
    return (dispatch) =>{
      deleteBook(id).then((res)=>{
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