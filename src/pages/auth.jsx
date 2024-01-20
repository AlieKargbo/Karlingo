import React from 'react';
import { useSearchParams } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import Login from "./auth/login"
import Signup from "./auth/signup"


function Auth() {
    const [searchParams] = useSearchParams();
    const authType = searchParams.get('authType');
  
    return (
      <div>
        
        {authType === 'login' && <Login />}
        {authType === 'signup' && <Signup />}
      </div>
    );
};

export default Auth