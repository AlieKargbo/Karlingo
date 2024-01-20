import React from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import { useUserAuth } from "../context/UserAuthContext";

function Welcome() {
  const data = useLocation();
  console.log(data)

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  const myParamValue = searchParams.get('lan');

  const updateAndNavigate = () => {
    // Update the query parameter
    setSearchParams((prevParams) => {
      return new URLSearchParams({ ...prevParams, lan: 'krio' });
    });

    // Navigate to a new page with the updated query parameters
    navigate(`/learn?lan=krio`);
  };
  const lag2 = () => {
    // Update the query parameter
    setSearchParams((prevParams) => {
      return new URLSearchParams({ ...prevParams, lan: 'temne' });
    });

    // Navigate to a new page with the updated query parameters
    navigate(`/learn?lan=temne`);
  };
  const lag3 = () => {
    // Update the query parameter
    setSearchParams((prevParams) => {
      return new URLSearchParams({ ...prevParams, lan: 'mende' });
    });

    // Navigate to a new page with the updated query parameters
    navigate(`/learn?lan=mende`);
  };

  return (
    <>
      <div className='flex-none m-14'>
        {/* <Link to="/" className=''>
          <BsArrowLeft className='' size={35} />
        </Link> */}
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className='border hover:border-indigo-600 border-transparent py-4 px-6 rounded inline-flex focus:outline-none focus:ring'>
            Log out
          </button>
        </div>

        <div className="flex justify-center">
          <h1 className='font-mono font-bold text-3xl '>Pick Language</h1>
        </div>
      </div>
      {/* <div className='flex justify-center'>
        <div className="flex flex-col md:flex-row justify-center mt-5 space-x-0 md:space-x-4 ">
          <Link
            to='/learn'
            state={{
              id: data.state.id
            }}
          >
            <div className='bg-white h-56 w-60 rounded-md border-4 hover:bg-slate-200 p-4'>
              <h1 className='font-mono text-xl tracking-tight text-center line-clamp-2'>Learning {data.state.id} for the first time?</h1>
              <div className="mt-4">
                <p className='font-mono text-lg text-center'>Start from scratch.</p>
              </div>
            </div>
          </Link>
          <Link to='/learn'>
            <div className='bg-white h-56 w-60 rounded-md border-4 hover:bg-slate-200 p-4 md:p-6'>

              <h1 className='font-mono text-xl text-center line-clamp-2'>Already  know some {data.state.id}?</h1>
              <div className="mt-4">
                <p className='font-mono text-lg text-center'>Check your level.</p>
              </div>

            </div>
          </Link>
        </div>
      </div > */}
      <div className="flex justify-center p-5 space-x-3">
        <button onClick={updateAndNavigate}
        >
          <div className='bg-white h-56 w-48 rounded-md border-4 hover:bg-slate-200 p-4 md:p-6'>
            <div className="my-20">
              <p className='font-mono text-2xl text-center'>Krio</p>
            </div>
          </div>
        </button>
        <button onClick={lag2}
        >
          <div className='bg-white h-56 w-48 rounded-md border-4 hover:bg-slate-200 p-4 md:p-6'>
            <div className="my-20">
              <p className='font-mono text-2xl text-center'>Temne</p>
            </div>
          </div>
        </button>
        <button onClick={lag3}
        >
          <div className='bg-white h-56 w-48 rounded-md border-4 hover:bg-slate-200 p-4 md:p-6'>
            <div className="my-20">
              <p className='font-mono text-2xl text-center'>Mende</p>
            </div>
          </div>
        </button>

      </div>
    </>
  )
}

export default Welcome