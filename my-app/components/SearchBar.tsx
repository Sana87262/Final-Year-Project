

"use client"
import Image from "next/image";
import React from "react";
import { CustomButtonProps } from "../Types";


 const SearchBar = ({onChange,value}) => {

 return (
      

  // <div className="items-center px-4 flex justify-center pt-4  " >
  // <div className="relative mr-96">
  //     <div className="absolute top-3 left-3 items-center ">
  //     <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
  //     </div>
     
       
  //     <input
  //       type="text"
  //       className=" block p-2 pl-10 w-70 text-gray-900 bg-gray-200 px-40 rounded-3xl border border-white focus:pl-3"
  //       placeholder="Search..."
  //       onFocus={handleFocus}
  //       onBlur={handleBlue}
  //     />
  //   </div>
  // </div>
  
  <div className="flex items-center border rounded-md p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-5-5M11 5a6 6 0 100 12 6 6 0 000-12z"
    />
  </svg>
  <input
    type="text"
    className="w-full outline-none "
    placeholder="Search..."
    value={value}
    onChange={onChange}
  />
</div>
    
  )
}

export default SearchBar