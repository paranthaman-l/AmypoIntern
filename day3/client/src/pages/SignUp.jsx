import React, { useState } from 'react'
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const [signUp,setSignUp] = useState();
    const navigate = useNavigate();
    const  handleSubmit=async (e)=>{
        e.preventDefault();
        await AuthService.signUp(signUp).then((response)=>{
            console.log(response);
            if(response.data!="")
                navigate("/login");
            else
                toast("Already Email Exists")
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setSignUp({...signUp,[name]:value});
    }
    return (
        <div className="min-h-screen pt-5 text-black" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
            <Toaster/>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
                        <h1 className="text-black text-3xl mb-3">Welcome</h1>
                        <div>
                            <p className="text-black">Libraries allow children to ask questions about the world and find the answers. And the wonderful thing is that once a child learns to use a library, the doors to learning are always open.  <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">SignUp</h2>
                        <p className="mb-4">
                            Create your account. It’s free and only take a minute
                        </p>
                        <form  onSubmit={handleSubmit} >
                            <div className="grid grid-cols-2 gap-5">
                                <input onChange={handleChange} type="text" name='name' placeholder="Full Name" className="border border-gray-400 py-1 px-2" />
                                <input onChange={handleChange} type="text" name='rollNo' placeholder="RollNo" className="border border-gray-400 py-1 px-2" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="password" name='password' placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="password" name='confirmPassword' placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="text" name='mobileNo' placeholder="MobileNo" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="date" name='dob' placeholder="Dob" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <div className="mt-5">
                                <input onChange={handleChange} type="text" name='city' placeholder="City" className="border border-gray-400 py-1 px-2 w-full" />
                            </div>
                            <fieldset className="grid grid-cols-2 gap-4 mt-3">
                                <legend className="sr-only">Role</legend>
                                <div>
                                    <input onChange={handleChange}
                                        type="radio"
                                        name="role"
                                        id="DeliveryStandard"
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                        checked
                                        value={"admin"}
                                    />

                                    <label
                                        htmlFor="DeliveryStandard"
                                        className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 text-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-black dark:text-black">ADMIN</p>

                                            <svg
                                                className="hidden h-5 w-5 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                    </label>
                                </div>

                                <div>
                                    <input onChange={handleChange}
                                        type="radio"
                                        name="role"
                                        value={"user"}
                                        id="DeliveryPriority"
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                    />

                                    <label
                                        htmlFor="DeliveryPriority"
                                        className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 text-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-black dark:text-black">USER</p>

                                            <svg
                                                className="hidden h-5 w-5 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
                            <div className="mt-5">
                                <input onChange={handleChange} type="checkbox" className="border border-gray-400" />
                                <span>
                                    I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                                </span>
                            </div>
                            <div className="mt-5">
                                <button onClick={handleSubmit} className="w-full bg-purple-500 py-3 text-center text-black">SignUp Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp