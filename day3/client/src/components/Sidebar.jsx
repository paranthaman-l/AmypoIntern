import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    return (
        <div className='flex flex-col pt-20 max-h-screen h-screen w-52 bg-white top-0 text-black fixed left-0'>
            <div onClick={()=>navigate("/")} className='cursor-pointer h-16 px-5 flex items-center font-poppins'>
                <p className='text-xl '>Li<span className='text-amber-600  font-alata text-3xl font-bold'>b</span>rary Management</p>
            </div>
            <div className="mt-5 mx-4">
                <ul className='flex flex-col'>
                    <li onClick={()=>navigate("/library")} className={`w-full cursor-pointer hover:scale-105 duration-300 py-2 indent-4 rounded-lg my-2 ${pathname==="/library" && "bg-black text-white"}`}>Library</li>
                    <li onClick={()=>navigate("/users")} className={`w-full cursor-pointer hover:scale-105 duration-300 py-2 indent-4 rounded-lg my-2 ${pathname==="/users" && "bg-black text-white"}`}>Users</li>
                    <li onClick={()=>navigate("/addBook")} className={`w-full cursor-pointer hover:scale-105 duration-300 py-2 indent-4 rounded-lg my-2 ${pathname==="/addBook" && "bg-black text-white"}`}>Add Book</li>
                    <li  className={`w-full cursor-pointer hover:scale-105 duration-300 py-2 indent-4 rounded-lg my-2 ${pathname.includes("/editBook/") && "bg-black text-white"}`}>Edit Book</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar