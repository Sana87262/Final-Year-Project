"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { CustomButton } from "../../../components";


function signin() {
  const router=useRouter();
  return (
    
    
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="logo.png"
                        alt="logo" />
                      <h4 className=" pt-3 mb-12 mt-1 pb-1 text-xl font-semibold text-blue-950">
                        Welcome Back!
                      </h4>
                    </div>
    
                    <form>
                     
                    <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded-xl border-0 bg-blue-1000 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username" />
                        <label
                          form="exampleFormControlInput1"
                          className="text-black pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Email address
                        </label>
                      </div>
    
                      
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded-xl border-0 bg-blue-1000 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password" />
                        <label
                          form="exampleFormControlInput11"
                          className="text-black pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Password
                        </label>
                      </div>
                      <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck3"
                checked />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck3">
                Remember password?
              </label>
            </div>
    </div>
                      
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="rounded-xl bg-blue-950 text-white mb-3 inline-block w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-norma shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          onClick={()=>router.push("/userfeed")}
                          data-te-ripple-init
                          data-te-ripple-color="light"
                       >
                          Sign in
                        </button>
                      
                        <h1 className="font-bold">OR</h1>
                        
                      </div>
    
                      
                    
                       
                  <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-blue-1000 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
          
           
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"  className="mr-3 h-5 w-5" >
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
              Sign in with Google
              </a>
              <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-blue-1000 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 240"  className="mr-3 h-5 w-5">
              <path fill="#E17726" d="M250.066 0L140.219 81.279l20.427-47.9z"/>
              <path fill="#E27625" d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z"/>
              <path fill="#E27625" d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z"/>
              <path fill="#D5BFB2" d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z"/>
              <path fill="#233447" d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z"/>
              <path fill="#CC6228" d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z"/>
              <path fill="#E27525" d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z"/>
              <path fill="#F5841F" d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z"/>
              <path fill="#C0AC9D" d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z"/>
              <path fill="#161616" d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z"/>
              <path fill="#763E1A" d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z"/>
              <path fill="#F5841F" d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z"/>
                </svg>
                Sign in with Metamask
             </a>
             {/* <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-blue-1000 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px"  className="mr-3 h-5 w-5" viewBox="0 0 2497 2497">
    
      <g id="Layer_x0020_1">
	            <g id="_2806050136896">
		        <circle className="st0 " cx="1249" cy="1249" r="1247"></circle>
		      <path className="st1" d="M764,930c267-261,701-261,969,0l32,31c13,13,13,34,0,47l-110,107c-7,7-18,7-24,0l-44-43    c-187-182-489-182-676,0l-47,46c-7,7-18,7-24,0l-110-107c-13-13-13-34,0-47l35-34H764z M1960,1152l98,96c13,13,13,34,0,47    l-442,431c-13,13-35,13-48,0l-314-306c-3-3-9-3-12,0l-314,306c-13,13-35,13-48,0l-442-431c-13-13-13-34,0-47l98-96    c13-13,35-13,48,0l314,306c3,3,9,3,12,0l314-306c13-13,35-13,48,0l314,306c3,3,9,3,12,0l314-306C1925,1139,1947,1139,1960,1152    L1960,1152z"></path>
	    </g>
      </g>
        </svg>
          Sign in with Walletconnect



            </a> */}
  
               <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        
                        {/* <button
                          type="button"
                          onClick={()=>router.push("/signup")}
                          className="inline-block rounded-xl text-black bg-blue-1000 border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Sign up
                        </button> */}
                        <CustomButton
                      title="Sign Up"
                      containerStyles="bg-blue-950 text-white rounded-full m-10  "
                     handleClick={()=>router.push("/signup")} />
                      </div>
                    </form>
                  </div>
                </div>
    
                
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">

                 <div className="px-4 py-6 md:mx-6 md:p-12">
                  <img src="/login.jpg" alt="login" className="object-contain rounded-3xl size-10/12"/>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     

    
    
   

     
    
  
  )
}

export default signin