import { useState } from 'react'
import Navbar from './nav';
import { BrowserRouter, Link } from 'react-router-dom';
import Tm from './t/tm'
import Footer from './footer';

function Home() {

  return (
    <>
      <Navbar />
      <div className="flex justify-center font-mono font-bold mt-56 ">
        <h2>Learn local languages with ease</h2>
      </div>
      <div className="flex justify-center flex-row space-x-4 md:w-full mt-12">
        <div className="bg-blue-500 font-bold font-mono py-2 px-4 rounded ">
          <h1>Krio</h1>
        </div>
        <div className="bg-blue-500 font-bold font-mono py-2 px-4 rounded ">
          <h1>Temne</h1>
        </div>
        <div className="bg-blue-500 font-bold font-mono py-2 px-4 rounded ">
          <h1>Mende</h1>
        </div>
      </div>
      <div className="flex justify-center m-4 space-x-4">
        <div className="bg-slate-50 hover:border-blue-900 h-10 w-40 rounded-md border-2">
          <Link to="/auth?authType=login">
            <span className='flex justify-center pt-2'>Login</span>
          </Link>
        </div>
        <div className="bg-blue-500 hover:border-blue-900 h-10 w-40 rounded-md border-2">
          <Link to="/auth?authType=signup">
            <span className='flex justify-center pt-2 '>Getting Started</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
