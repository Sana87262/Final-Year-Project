"use client"
import React, { useState } from 'react'

import { Navbar } from '.'
import SearchhBar from './SearchBar'
import SearchBar from './SearchBar'
import  Head  from 'next/head'

const Profile = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
      setSearchTerm(e.target.value);
    };
  return (
    <>
    <Navbar/>
    
    <div className="flex items-center justify-center px-4 pt-4">
        {/* //items-center px-4 flex justify-center pt-4 */}
      <div className="relative mr-96">
       
        <SearchBar onChange={handleSearch} value={searchTerm} />
        {searchTerm && (
          <p className="mt-4">
            You are searching for: <strong>{searchTerm}</strong>
          </p>
        )}
      </div>
    </div>
            
    {/* <div className="flex items-center justify-center px-4 pt-4"> */}
    {/* <div className="relative mr-96"> */}
    {/* <a className="flex mb-10 w-full items-center justify-center rounded-xl bg-blue-1000 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            
           
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
            <div className='relative mr-3 ml-10'>
         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" className="mr-3 h-5 w-5" viewBox="0 0 122.88 101.33"  
         >
            <g>
                <path className="st0" d="M90.62,33.32h18.4v-2.79c-2.88-10.73-10.2-10.66-19.25-10.57c-1.49,0.02-2.84,0.03-2.92,0.03H18.07 c-1.58,0-2.86-1.28-2.86-2.86c0-1.58,1.28-2.86,2.86-2.86h68.78c2.03,0,2.46,0,2.87-0.01c7.74-0.08,14.5-0.15,19.3,4.38v-1.31 c0-3.2-1.31-6.1-3.42-8.21c-2.11-2.11-5.02-3.42-8.21-3.42H17.34c-3.2,0-6.1,1.31-8.21,3.42c-2.11,2.11-3.42,5.02-3.42,8.21v66.64 c0,3.2,1.31,6.1,3.42,8.21c2.11,2.11,5.02,3.42,8.21,3.42h80.04c3.2,0,6.1-1.31,8.21-3.42c2.11-2.11,3.42-5.02,3.42-8.21v-9.46 h-18.4c-5.55,0-10.6-2.27-14.25-5.92c-3.65-3.65-5.92-8.7-5.92-14.25v-0.87c0-5.55,2.27-10.6,5.92-14.25 C80.02,35.59,85.06,33.32,90.62,33.32L90.62,33.32z M114.73,33.43c2.07,0.31,3.92,1.29,5.33,2.71c1.74,1.74,2.81,4.14,2.81,6.78 v21.6c0,2.76-1.12,5.26-2.93,7.07c-1.39,1.39-3.2,2.38-5.21,2.76v9.63c0,4.77-1.95,9.11-5.09,12.25 c-3.14,3.14-7.48,5.09-12.25,5.09H17.34c-4.77,0-9.11-1.95-12.25-5.09C1.95,93.1,0,88.76,0,83.99V17.34 c0-4.77,1.95-9.11,5.09-12.25C8.23,1.95,12.57,0,17.34,0h80.04c4.77,0,9.11,1.95,12.25,5.09c3.14,3.14,5.09,7.48,5.09,12.25V33.43 L114.73,33.43z M88.14,46.11c4.05,0,7.33,3.28,7.33,7.33c0,4.05-3.28,7.33-7.33,7.33c-4.05,0-7.33-3.28-7.33-7.33 C80.81,49.39,84.09,46.11,88.14,46.11L88.14,46.11z"/></g></svg>
                    Connect Wallet    </div></a> */}
          
                    <a className='flex items-center justify-center "
                    

            
           
                    href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light"'> Connect</a>

    </>
  )
}

export default Profile