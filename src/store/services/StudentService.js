import HttpService from './HttpService';


export const addNewStudent = (credentials) =>{
    const http = new HttpService();
    let newStudent  = "student/add";
    return http.postData(credentials,newStudent ).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const loadStudents = (page) =>{
    let pager = 3;
    let studentsDataUrl ; 
    if(page==""){
        studentsDataUrl = "student/get-all/"+pager; 
    }else{
        studentsDataUrl = "student/get-all/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(studentsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}
export const loadfiltreStudents = (filtre,page) =>{
    let pager = 3;
    let studentsDataUrl ; 
    if(page==""){
        studentsDataUrl = "student/filtre/"+filtre+"/"+pager; 
    }else{
        studentsDataUrl = "student/filtre/"+filtre+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(studentsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}

export const loadSearchStudents = (search_content,page) =>{
    let pager = 3;
    let studentsDataUrl ; 
    if(page==""){
        studentsDataUrl = "student/search/"+search_content+"/"+pager; 
    }else{
        studentsDataUrl = "student/search/"+search_content+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(studentsDataUrl).then((data)=>{
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
    let getDataUrl = "student/get-single/"+id;
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

export const loadSingleDataprofile =(id) =>
{
if(id==""){

}else{
    let getDataUrl = "getprofile/"+id;
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
let editDataUrl = "student/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteStudent  = (id) =>
{
    const data = {};
       const http = new HttpService();
       let deleteUrl = "student/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   
   }


