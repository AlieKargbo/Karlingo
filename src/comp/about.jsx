import React from 'react'
import Navbar from './nav';
import image from './i.jpg'
import { Link } from "react-router-dom"
import { BsTwitterX, BsInstagram, BsArrowLeft } from "react-icons/bs";

function Footer() {
  return (
    <>
        <Navbar />
        
        <div className="py-12 xl:py-24 h-[84] xl:pt-28">
            <Link to="/" >
                    <BsArrowLeft className='ml-14'/>
            </Link>
            <div className="container mx-auto">
                <div className='flex justify-between gap-x-8 '>
                    <div className="flex flex-col md:flex-row ">
                    <div className='flex flex-col justify-center text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Founder</div>
                        <h1 className='text-lg font-bond'>Alie Kargbo</h1>
                        <div className='text-lg mb-8 font-light '>
                            <p>Karlingo is a web platform which helps users to learn african ethenic languages.</p>
                            <p>Currently support three languages as displayed on the home.</p>
                            <p>More languages are on the way</p>
                            </div>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <div className="flex gap-6 pb-5">
                                <a href="https://www.twitter.com/apkargbo">
                                <BsTwitterX className="text-2xl cursor-pointer hover:text-blue-600" />
                                </a>
                                <a href="https://www.instagram.com/slick.ak">
                                <BsInstagram className="text-2xl cursor-pointer hover:text-blue-600" />
                                </a>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="ml-4 md:ml-96 ">
                        <img src={image} alt='' className='h-64 w-48 md:h-96 md:w-80 rounded-lg '/>
                    </div>
                    
                    </div>
                    {/* <img src={image} alt='' className='h-96 w-80 rounded-lg '/> */}
                    <div></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer