import HttpService from './HttpService';

export const addNewDirector = (credentials) =>{
    const http = new HttpService();
    let newDirector = "director/add";
    return http.postData(credentials,newDirector).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadDirectors = (page) =>{
    let pager = 2;
    let directorsDataUrl ; 
    if(page==""){
        directorsDataUrl = "director/get-all/"+pager; 
    }else{
        directorsDataUrl = "director/get-all/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(directorsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}

export const loadDirectorProfile = (token) =>{
        let getDataUrl = "loadProfile/"+token;
        const http = new HttpService();
        return http.getData(getDataUrl).then((data)=>{
            console.log(data);
            return data
        }).catch((error)=>{
            console.log(error);
            return error
        })
    
}


export const loadSearchDirectors = (search_content,page) =>{
    let pager = 2;
    let directorsDataUrl ; 
    if(page==""){
        directorsDataUrl = "director/search/"+search_content+"/"+pager; 
    }else{
        directorsDataUrl = "director/search/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(directorsDataUrl).then((data)=>{
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
    let getDataUrl = "director/get-single/"+id;
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


export const editdirectorProfile = (data,id) =>
{
    if(id==""){

    }else
    {
      const http = new HttpService();
let editDataUrl = "director/updateProfile/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}
export const editdirectorpassword = (data,id) =>
{
    if(id==""){

    }else
    {
      const http = new HttpService();
let editDataUrl = "director/changepassword/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}

export const editSingleData = (data,id) =>
{
    if(id==""){

    }else
    {
      const http = new HttpService();
let editDataUrl = "director/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteDirector = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "director/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


