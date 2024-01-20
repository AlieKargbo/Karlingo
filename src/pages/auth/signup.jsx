import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BsArrowLeft, BsGoogle, BsFacebook } from "react-icons/bs";
import { useUserAuth } from '../../context/UserAuthContext';
//import { useNavigate } from 'react-router-dom';
import Login from './login';
import Learn from '../learn';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState("");
    const { signUp, googleSignIn } = useUserAuth();
    let navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password, displayName);
            navigate("/welcome")

        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/welcome");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="flex justify-between m-10">
                <Link to="/" className=''>
                    <BsArrowLeft className='' size={35} />
                </Link>
                <div className="bg-slate-50 hover:border-blue-900 h-10 w-40 rounded-md border-2">
                    <Link to="/auth?authType=login">
                        <span className='flex justify-center pt-2'>Login</span>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center">
                <h1 className='font-mono font-bold text-xl '>Signup</h1>
            </div>
            <div className="flex justify-center">
            {error && <h1>{error}</h1>}
                <form onSubmit={handleSubmit}> 
                    <div class="flex flex-col space-y-6">
                        <input type="text" className='w-80 h-10 rounded-md border-2 focus:outline-none focus:ring ' placeholder='Name' 
                        onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <input type="email" className='w-80 h-10 rounded-md border-2 focus:outline-none focus:ring ' placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" className='w-80 h-10 rounded-md border-2 focus:outline-none focus:ring ' placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="bg-blue-500 hover:border-blue-900 h-10 w-80 rounded-md border-2">
                            Create Account
                        </button>
                        <div className="flex mt-6">
                            <div className="bg-slate-300 grow h-0.5 my-3"></div>
                            <div className="pr-8 pl-8">
                                <h1 className="text-base font-bold uppercase">or</h1>
                            </div>
                            <div className="bg-slate-300 grow h-0.5 my-3"></div>
                        </div>

                    </div>
                </form> 
            </div>
            <div className="flex justify-center">
                <div className="flex mt-6 space-x-2">
                    <button className="bg-slate-50  hover:border-blue-900 h-10 w-80 rounded-md border-2" onClick={handleGoogleSignIn}>
                        <div className="flex justify-center space-x-2">
                            <BsGoogle className='mt-1' />
                            <h1>Google</h1>
                        </div>
                    </button>
                    {/* <button className="bg-slate-50 hover:border-blue-900 h-10 w-40 rounded-md border-2">
                        <div className="flex justify-center space-x-2">
                            <BsFacebook className='mt-1' />
                            <h1>Facebook</h1>
                        </div>
                    </button> */}
                </div>
            </div>

        </>
    )
}

export default Signup