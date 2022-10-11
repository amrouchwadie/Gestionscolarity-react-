import HttpService from './HttpService';


export const addNewCourse = (credentials) =>{
    const http = new HttpService();
    let newCourse = "course/add";
    credentials.token = localStorage.getItem('user');
    console.log(credentials)
    return http.postData(credentials,newCourse).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}
export const loadCoursesstudent = (page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let coursesDataUrl ; 
    if(page==""){
        coursesDataUrl = "course/get-all/"+token+"/"+pager; 
    }else{
        coursesDataUrl = "course/get-all/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(coursesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}
export const loadCoursesprofessor = (id,page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let coursesDataUrl ; 
    if(page==""){
        coursesDataUrl = "course/getprofessorData/"+token+"/"+pager; 
    }else{
        coursesDataUrl = "course/getprofessorData/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(coursesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchCoursesprofessor = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 10;
    let coursesDataUrl ; 
    if(page==""){
        coursesDataUrl = "course/searchDataprofessor/"+search_content+"/"+token+"/"+pager; 
    }else{
        coursesDataUrl = "course/searchDataprofessor/"+search_content+"/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(coursesDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
        return error
    })
    
}



export const countCourse =() =>
{
    let getDataUrl = "countCourse";
    const http = new HttpService();
    return http.getData(getDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error);
        return error
    })
}

export const loadSingleData =(id) =>
{
if(id==""){

}else{
    let getDataUrl = "course/get-single/"+id;
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
let editDataUrl = "course/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteCourse = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "course/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


