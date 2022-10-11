import HttpService from './HttpService';


export const addNewProfessor = (credentials) =>{
    const http = new HttpService();
    let newProfessor = "professor/add";
    return http.postData(credentials,newProfessor).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadProfessors = (page) =>{
    let pager = 2;
    let professorsDataUrl ; 
    if(page==""){
        professorsDataUrl = "professor/get-all/"+pager; 
    }else{
        professorsDataUrl = "professor/get-all/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(professorsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchProfessors = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let professorsDataUrl ; 
    if(page==""){
        professorsDataUrl = "professor/search/"+search_content+"/"+pager; 
    }else{
        professorsDataUrl = "professor/search/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(professorsDataUrl).then((data)=>{
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
    let getDataUrl = "professor/get-single/"+id;
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
let editDataUrl = "professor/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteProfessor = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "professor/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


