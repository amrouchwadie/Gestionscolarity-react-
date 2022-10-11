import HttpService from './HttpService';


export const addNewFiliere = (credentials) =>{
    const http = new HttpService();
    let newFiliere = "filiere/add";
    return http.postData(credentials,newFiliere).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadFilieres = (page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let filieresDataUrl ; 
    if(page==""){
        filieresDataUrl = "filiere/get-all/"+pager; 
    }else{
        filieresDataUrl = "filiere/get-all/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(filieresDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchFilieres = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 2;
    let filieresDataUrl ; 
    if(page==""){
        filieresDataUrl = "filiere/search/"+search_content+"/"+pager; 
    }else{
        filieresDataUrl = "filiere/search/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(filieresDataUrl).then((data)=>{
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
    let getDataUrl = "filiere/get-single/"+id;
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
let editDataUrl = "filiere/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteFiliere = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "filiere/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


