import React, { useState } from 'react'
import  bgLib from '../assets/library.jpg'
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const [login,setLogin] = useState({});
    const handleChange = (e )=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value});
    }
    const  navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(login);
        await AuthService.login(login).then((response)=>{
            localStorage.setItem("uid", response.data?.uid);
            if(response.data?.role==="admin")
                navigate("/library")
            else if(response.data?.role==="user")
                navigate("/user")
            else if(response.data==null)
                toast.error("Invalid Credentials");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        // <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
        //     <div
        //         className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        //     >
        //         <div className="flex flex-col justify-center p-8 md:p-14">
        //             <span className="mb-3 text-4xl font-bold">Welcome back</span>
        //             <span className="font-light text-gray-400 mb-8">
        //                 Welcom back! Please enter your details
        //             </span>
        //             <div className="py-4">
        //                 <span className="mb-2 text-md">Email</span>
        //                 <input
        //                     type="text"
        //                     className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        //                     name="email"
        //                     id="email"
        //                 />
        //             </div>
        //             <div className="py-4">
        //                 <span className="mb-2 text-md">Password</span>
        //                 <input
        //                     type="password"
        //                     name="pass"
        //                     id="pass"
        //                     className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        //                 />
        //             </div>
        //             {/* <div className="flex justify-between w-full py-4">
        //                 <div className="mr-24">
        //                     <input type="checkbox" name="ch" id="ch" className="mr-2" />
        //                     <span className="text-md">Remember for 30 days</span>
        //                 </div>
        //                 <span className="font-bold text-md">Forgot password</span>
        //             </div> */}
        //             <button
        //                 className="w-full bg-black border-transparent border-[2px] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        //             >
        //                 Sign in
        //             </button>
        //             {/* <button
        //                 className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
        //             >
        //                 <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
        //                 Sign in with Google
        //             </button> */}
        //             <div className="text-center text-gray-400">
        //                 Dont'have an account?
        //                 <span className="font-bold text-black">Sign up for free</span>
        //             </div>
        //         </div>
        //         <div className="relative">
        //             <img
        //                 src={bgLib}
        //                 alt="img"
        //                 className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        //             />
        //             <div
        //                 className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
        //             >
        //                 <span className="text-white text-xl"
        //                 >Without libraries, what have we?"<br />We have no past and no future"
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        <Toaster/>
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-screen w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-xl py-6">
              {/* Header */}
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
                  <svg
                    className="hi-mini hi-cube-transparent inline-block h-5 w-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Library</span>
                </h1>
                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Welcome, please sign in to your dashboard
                </h2>
              </header>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form onClick={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        name="password"
                        placeholder="Enter your password"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <div className="mb-5 flex items-center justify-between space-x-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember_me"
                            name="remember_me"
                            className="h-4 w-4 rounded border border-gray-200 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500"
                          />
                          <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <p
                          href="#"
                          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <button
                      onClick={handleSubmit}
                        type="submit"
                        className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                      >
                        <svg
                          className="hi-mini hi-arrow-uturn-right inline-block h-5 w-5 opacity-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Sign In</span>
                      </button>
                      {/* Divider: With Label */}
                      {/* <div className="my-5 flex items-center">
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                        />
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          or sign in with
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                        />
                      </div> */}
                      {/* END Divider: With Label */}
                      {/* <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                        >
                          <svg
                            className="bi bi-facebook inline-block h-4 w-4 text-[#1877f2]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          <span>Facebook</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                        >
                          <svg
                            className="bi bi-twitter-x inline-block h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg>
                          <span className="sr-only">X</span>
                        </button>
                      </div> */}
                    </div>
                  </form>
                </div>
                <div className="grow bg-gray-50 p-5 text-center text-sm dark:bg-gray-700/50 md:px-16">
                  Don’t have an account yet?
                  <p
                  onClick={()=>navigate("/signup")}
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Sign up
                  </p>
                </div>
              </div>
              {/* END Sign In Form */}

              {/* Footer */}
              {/* <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Powered by
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Tailkit
                </a>
              </div> */}
              {/* END Footer */}
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
    )
}

export default Login