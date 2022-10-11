import HttpService from './HttpService';


export const addNewAssign = (credentials) =>{
    const http = new HttpService();
    let newAssign = "assign/add";
    credentials.token = localStorage.getItem('user');
    console.log(credentials)
    return http.postData(credentials,newAssign).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}
export const loadAssignsprofessor = (id,page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let assignsDataUrl ; 
    if(page==""){
        assignsDataUrl = "assign/getprofessorData/"+token+"/"+pager; 
    }else{
        assignsDataUrl = "assign/getprofessorData/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(assignsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadAssignsstudent = (page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let assignsDataUrl ; 
    if(page==""){
        assignsDataUrl = "assign/get-all/"+token+"/"+pager; 
    }else{
        assignsDataUrl = "assign/get-all/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(assignsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}

export const loadSearchAssignsprofessor = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let assignsDataUrl ; 
    if(page==""){
        assignsDataUrl = "assign/searchDataprofessor/"+search_content+"/"+token+"/"+pager; 
    }else{
        assignsDataUrl = "assign/searchDataprofessor/"+search_content+"/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(assignsDataUrl).then((data)=>{
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
    let getDataUrl = "assign/get-single/"+id;
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
let editDataUrl = "assign/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteAssign = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "assign/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


