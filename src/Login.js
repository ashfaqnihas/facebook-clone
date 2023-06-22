import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import { actionType } from './reducer';
import { useStatevalue } from './StateProvider';


const Login = () => {
     const [state,dispatch] = useStatevalue();

     const signIn = ()=>{
          auth
          .signInWithPopup(provider)
          .then((result)=>{
              dispatch({
               type:actionType.SET_USER,
               user:result.user,
              })
          })
          .catch((error)=>alert(error.message));
    }

  return (
    <div className='login'>
      <div className="login_logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
          <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
      </div>
      <button type='submit' onClick={signIn}>
         Sign In
      </button>
    </div>
  )
}

export default Login
