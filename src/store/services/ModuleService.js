import HttpService from './HttpService';


export const addNewModule = (credentials) =>{
    const http = new HttpService();
    let newModule = "module/add";
    return http.postData(credentials,newModule).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadModules = (id,page) =>{
    let pager = 10;
    let modulesDataUrl ; 
    if(page==""){
        modulesDataUrl = "module/get-all/"+id+"/"+pager; 
    }else{
        modulesDataUrl = "module/get-all/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(modulesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchModules = (search_content,id,page) =>{
    let pager = 10;
    let modulesDataUrl ; 
    if(page==""){
        modulesDataUrl = "module/search/"+search_content+"/"+id+"/"+pager; 
    }else{
        modulesDataUrl = "module/search/"+search_content+"/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(modulesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}
export const loadModulesall = (page) =>{
    let pager = 10;
    let modulesDataUrl ; 
    if(page==""){
        modulesDataUrl = "module/get-alldata/"+pager; 
    }else{
        modulesDataUrl = "module/get-alldata/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(modulesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchModulesall = (search_content,page) =>{
    let pager = 10;
    let modulesDataUrl ; 
    if(page==""){
        modulesDataUrl = "module/searchall/"+search_content+"/"+pager; 
    }else{
        modulesDataUrl = "module/searchall/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(modulesDataUrl).then((data)=>{
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
    let getDataUrl = "module/get-single/"+id;
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
let editDataUrl = "module/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteModule = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "module/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


