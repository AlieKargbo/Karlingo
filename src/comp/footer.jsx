import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX, BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full mt-56 flex md:flex-row flex-col justify-around items-start p-10">
      <div className="p-5 ">
        <ul>
          <p className="text-gray-800 font-bold text-3xl pb-6">
            Kar<span className="text-blue-600">lingo</span>
          </p>
          <div className="flex gap-6 pb-5">
            <a href="https://www.twitter.com/Karlingo_ln">
              <BsTwitterX className="text-2xl cursor-pointer hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/karlingo.ln">
              <BsInstagram className="text-2xl cursor-pointer hover:text-blue-600" />
            </a>
            
            
          </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Info</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link to='./about'>What is Karlingo about?</Link>
              
            
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            kar.lingo2023@gmail.com
          </li>
        </ul>
      </div>
      {/* <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            About
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Products
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Pricing
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Careers
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Press & Media
          </li>
        </ul>
      </div> */}
      {/* <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Contact
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Support Portals
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            List Of Charges
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Downloads & Resources
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Videos
          </li>
        </ul>
      </div> */}
    </div>
    <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
      <h1 className=" text-gray-800 font-semibold">
        © 2023 All rights reserved | Build with ❤💚 by{" "}
        <span className="hover:text-blue-600 font-semibold cursor-pointer">
          Alie-fou{" "}
        </span>
      </h1>
    </div>
    </>
  )
}

export default Footer