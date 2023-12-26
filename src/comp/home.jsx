import { useState } from 'react'
import Navbar from './nav';
import { BrowserRouter, Link } from 'react-router-dom';
import Tm from './t/tm'
import Footer from './footer';

function Home() {

  return (
    <>
    <Navbar />
    <div className="flex justify-center font-roboto font-bold mt-56 ">
      <h2>Learn ethnic languages with ease</h2>
    </div>
    <div className="flex justify-center flex-row space-x-4 md:w-full mt-12">
      <div className="bg-blue-500 font-bold py-2 px-4 rounded ">
          <Link to='./k'>Krio</Link>
      </div>
      <div className="bg-blue-500 font-bold py-2 px-4 rounded ">
          <Link to='./t'>Temne</Link>
      </div>
      <div className="bg-blue-500 font-bold py-2 px-4 rounded ">
          <Link to='./m'>Mende</Link>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Home
