import React from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import { useUserAuth } from "../context/UserAuthContext";


function Learn() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lag = searchParams.get('lan');
    const lev = searchParams.get('level');
    const data = useLocation();
    console.log(data)

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const level1 = () => {
        //Update the query parameter
        // if (lag === 'krio' && lev === 'l1') {
        //     navigate(`/lesson?lan=krio&level=l1`);
        // } else if (lag === 'krio' && lev === 'l1'){
        //     navigate(`/lesson?lan=temne&level=l1`);
        // } else if (lag === 'krio' && lev === 'l1'){
        //     navigate(`/lesson?lan=krio&level=l1`);
        // } 
        if (lag === 'krio') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'krio', level: 'l1' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=krio&level=l1`);
        } else if (lag === 'temne') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'temne', level: 'l1' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=temne&level=l1`);
        } else if (lag === 'mende') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'mende', level: 'l1' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=mende&level=l1`);
        }


    };
    const level2 = () => {
        //Update the query parameter
        // setSearchParams((prevParams) => {
        //     return new URLSearchParams({ ...prevParams, lan: 'krio', level: 'l2' });
        // });

        // // Navigate to a new page with the updated query parameters ?level=1
        // navigate(`/lesson?lan=krio&level=l2`);
        if (lag === 'krio') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'krio', level: 'l2' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=krio&level=l2`);
        } else if (lag === 'temne') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'temne', level: 'l2' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=temne&level=l2`);
        } else if (lag === 'mende') {
            setSearchParams((prevParams) => {
                return new URLSearchParams({ ...prevParams, lan: 'mende', level: 'l2' });
            });

            // Navigate to a new page with the updated query parameters ?level=1
            navigate(`/lesson?lan=mende&level=l2`);
        }

    };

    return (
        <>
            <div className="flex justify-between m-10">
                <Link to="/welcome" className=''>
                    <BsArrowLeft className='' size={35} />
                </Link>
                <div>
                    <h1 className='font-mono text-xl font-bold uppercase'>{lag}</h1>
                </div>
                {/* <h1>Welcome {user && user.displayName}</h1> */}
                <button
                    onClick={handleLogout}
                    className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>
                    Log out
                </button>
            </div>
            <div className="m-10">
                <h1 className='font-mono text-xl font-bold'>Unit 1</h1>
            </div>
            <div className='ml-28 space-y-11'>
                <button
                    onClick={level1}
                    className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>
                    Lesson 1
                </button>
            </div>
            <div className='flex justify-center mt-28'>
                <button
                    onClick={level2}
                    className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>
                    Lesson 2
                </button>
            </div>
            {/* <div className='flex justify-end mr-28 mt-28'>
                <Link to={{
                    pathname: `/`
                }}
                    className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>Lesson 3</Link>
            </div> */}
            <div className='flex justify-center mt-28'>
                <button className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>Coming Soon</button>
            </div>
            {/* <div className="bg-gray-50  w-full fixed bottom-0 flex flex-col justify-around  p-4 border-t-4">
                 <div className="flex justify-center">
                <div className="  flex justify-between ">
                     <Link to="/learn"
                                    
                                 className='h-16 w-32 rounded-lg grid content-center justify-center bg-slate-100'
                                >
                                    Exit
                                </Link> 
                    <button className='h-16 w-32 rounded-lg bg-slate-100 ml-10'
                    //onClick={showNextSentence}
                    >
                        Home
                    </button>
                    <button className='h-16 w-32 rounded-lg bg-slate-100 ml-10'
                    //onClick={showNextSentence}
                    >
                        Languages
                    </button>
                    <button className='h-16 w-32 rounded-lg bg-slate-100 ml-10'
                    //onClick={showNextSentence}
                    >
                        Account
                    </button>
                </div>
                </div> 
            </div> */}
        </>
    )
}

export default Learn