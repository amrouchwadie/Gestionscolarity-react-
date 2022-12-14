import {SignUpService } from '../services/AuthService'
import {LoginUser} from '../services/AuthService'

export const signUp = (credentials) =>{
    console.log(credentials);
    return (dispatch)=>{
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});
        if(credentials.password.length < 6){
            return dispatch({type: 'SHORT_PASSWORD'})
        }
    
        SignUpService(credentials).then((res)=>{
            console.log(res);
            if(res.token!==null){
                localStorage.setItem("user",'Bearer '+res.token);
                dispatch({type:'SIGNUP_SUCCESS'})
                
            }else{
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        
        )
    }
    
}


export const UserLogin = (credential,history) =>{
    
 return (dispatch)=>{
    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
     if(credential.password.length < 6)
     {
        return dispatch({type: 'SHORT_PASSWORD'})
     }

     
    LoginUser(credential).then((res)=>{
        console.log(res);
        if(res.success==true){
           localStorage.setItem("user",'Bearer '+res.token);
           dispatch({type:'LOGIN_SUCCESS'})
           setTimeout(() => {

           }, 100);
           
       }else{
           dispatch({type:'LOGIN_ERROR',res})
       }
   },
  
   error=>{
       dispatch({type:'CODE_ERROR',error});
       console.log(error)
   }
   
   
    )

    
    
}
 
}


export const resetAuthResponsePerComponent = (dispatch) =>
{
  return (dispatch) =>{
      dispatch({type:'RESTART_AUTH_RESPONSE'});
  }
}