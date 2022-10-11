import HttpService from './HttpService';


export const addNewBook = (credentials) =>{
    const http = new HttpService();
    let newBook = "book/add";
    credentials.token = localStorage.getItem('user');
    console.log(credentials)
    return http.postData(credentials,newBook).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadBooks = (page) =>{
    let pager = 3;
    let booksDataUrl ; 
    if(page==""){
        booksDataUrl = "book/get-all/"+pager; 
    }else{
        booksDataUrl = "book/get-all/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(booksDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchBooks = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 23;
    let booksDataUrl ; 
    if(page==""){
        booksDataUrl = "book/search/"+search_content+"/"+pager; 
    }else{
        booksDataUrl = "book/search/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(booksDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}

export const loadSingleData =(id) =>
{
if(id==""){

}else{
    let getDataUrl = "book/get-single/"+id;
    const http = new HttpService();
    return http.getData(getDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error);
        return error
    })
}

}




export const editSingleData = (data,id) =>
{
    if(id==""){

    }else
    {
      const http = new HttpService();
let editDataUrl = "book/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteBook = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "book/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


