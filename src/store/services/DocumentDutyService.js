import HttpService from './HttpService';


export const addNewDocumentDuty = (credentials) =>{
    const http = new HttpService();
    let newDocument = "DocumentsDuty/add";
    return http.postData(credentials,newDocument).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        return error; 
         });
}

export const loadDocumentsDuty = (id,page) =>{
    let pager = 10;
    let documentsDutyDataUrl ; 
    if(page==""){
        documentsDutyDataUrl = "DocumentsDuty/get-all/"+id+"/"+pager; 
    }else{
        documentsDutyDataUrl = "DocumentsDuty/get-all/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDutyDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchDocumentsDuty = (search_content,id,page) =>{
    let pager = 10;
    let documentsDutyDataUrl ; 
    if(page==""){
        documentsDutyDataUrl = "DocumentsDuty/search/"+search_content+"/"+id+"/"+pager; 
    }else{
        documentsDutyDataUrl = "DocumentsDuty/search/"+search_content+"/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDutyDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}
export const loadDocumentsDutyall = (page) =>{
    let pager = 10;
    let documentsDutyDataUrl ; 
    if(page==""){
        documentsDutyDataUrl = "DocumentsDuty/get-alldata/"+pager; 
    }else{
        documentsDutyDataUrl = "DocumentsDuty/get-alldata/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDutyDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchDocumentsDutyall = (search_content,page) =>{
    let pager = 10;
    let documentsDutyDataUrl ; 
    if(page==""){
        documentsDutyDataUrl = "DocumentsDuty/searchall/"+search_content+"/"+pager; 
    }else{
        documentsDutyDataUrl = "DocumentsDuty/searchall/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(documentsDutyDataUrl).then((data)=>{
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
    let getDataUrl = "DocumentsDuty/get-single/"+id;
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
let editDataUrl = "DocumentsDuty/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteDocumentDuty = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "DocumentsDuty/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


