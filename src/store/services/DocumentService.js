import HttpService from './HttpService';


export const addNewDocument = (credentials) =>{
    const http = new HttpService();
    let newDocument = "document/add";
    return http.postData(credentials,newDocument).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        return error; 
         });
}

export const loadDocuments = (id,page) =>{
    let pager = 10;
    let documentsDataUrl ; 
    if(page==""){
        documentsDataUrl = "document/get-all/"+id+"/"+pager; 
    }else{
        documentsDataUrl = "document/get-all/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchDocuments = (search_content,id,page) =>{
    let pager = 10;
    let documentsDataUrl ; 
    if(page==""){
        documentsDataUrl = "document/search/"+search_content+"/"+id+"/"+pager; 
    }else{
        documentsDataUrl = "document/search/"+search_content+"/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}
export const loadDocumentsall = (page) =>{
    let pager = 10;
    let documentsDataUrl ; 
    if(page==""){
        documentsDataUrl = "document/get-alldata/"+pager; 
    }else{
        documentsDataUrl = "document/get-alldata/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchDocumentsall = (search_content,page) =>{
    let pager = 10;
    let documentsDataUrl ; 
    if(page==""){
        documentsDataUrl = "document/searchall/"+search_content+"/"+pager; 
    }else{
        documentsDataUrl = "document/searchall/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDataUrl).then((data)=>{
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
    let getDataUrl = "document/get-single/"+id;
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
let editDataUrl = "document/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteDocument = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "document/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


