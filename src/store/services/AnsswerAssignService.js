import HttpService from './HttpService';


export const addNewDocumentanswer = (credentials) =>{
    const http = new HttpService();
    let newAnswer = "DocumentsDutyanswer/addanswer";
    credentials.token = localStorage.getItem('user');
    console.log(credentials)
    return http.postData(credentials,newAnswer).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}
export const loadAssignsdocumentt = (id,token) =>{ 
    let documentanswerDataUrl ;     
        documentanswerDataUrl = "DocumentsDutyanswer/get_data/"+id+"/"+token;
    const http = new HttpService();
    return http.getData(documentanswerDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}

export const loadSingleData =(id) =>
{
if(id==""){

}else{
    let getDataUrl = "DocumentsDutyanswer/get-single/"+id;
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
let editDataUrl = "DocumentsDutyanswer/update/"+id;
return http.postData(data,editDataUrl).then((data)=>{
     console.log(data)
    console.log(JSON.stringify(data));
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });
}
}


export const deleteDocumentanswer = (id) =>
{
    const data = {};

   if(id=="")
   {

   }else{
       const http = new HttpService();
       let deleteUrl = "DocumentsDutyanswer/delete/"+id;
       return http.postData(data,deleteUrl).then((data)=>{
        console.log(data)
       console.log(JSON.stringify(data));
       return data;
   }).catch((error)=> {console.log(error)
       return error; 
        });
   }
   }


