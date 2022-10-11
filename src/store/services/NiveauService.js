import HttpService from './HttpService';


export const addNewNiveau = (credentials) =>{
    const http = new HttpService();
    let newNiveau = "niveau/add";
    return http.postData(credentials,newNiveau).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadNiveaus = (id,page) =>{
    let pager = 10;
    let niveausDataUrl ; 
    if(page==""){
        niveausDataUrl = "niveau/get-all/"+id+"/"+pager; 
    }else{
        niveausDataUrl = "niveau/get-all/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(niveausDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchNiveaus = (search_content,id,page) =>{
    let pager = 10;
    let niveausDataUrl ; 
    if(page==""){
        niveausDataUrl = "niveau/search/"+search_content+"/"+id+"/"+pager; 
    }else{
        niveausDataUrl = "niveau/search/"+search_content+"/"+id+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(niveausDataUrl).then((data)=>{
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
    let getDataUrl = "niveau/get-single/"+id;
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
let editDataUrl = "niveau/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteNiveau = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "niveau/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


   export const loadallNiveaus = (page) =>{
    let pager = 10;
    let niveausDataUrl ; 
    if(page==""){
        niveausDataUrl = "niveau/get-alldata/"+pager; 
    }else{
        niveausDataUrl = "niveau/get-alldata/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(niveausDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchallNiveaus = (search_content,page) =>{
    let pager = 10;
    let niveausDataUrl ; 
    if(page==""){
        niveausDataUrl = "niveau/searchall/"+search_content+"/"+pager; 
    }else{
        niveausDataUrl = "niveau/searchall/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(niveausDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}
