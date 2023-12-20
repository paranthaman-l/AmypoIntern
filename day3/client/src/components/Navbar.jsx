import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    // let Links =[
    //     {name:"HOME",link:"/"},
    //     {name:"SERVICE",link:"/"},
    //     {name:"ABOUT",link:"/"},
    //     {name:"BLOG'S",link:"/"},
    //     {name:"CONTACT",link:"/"},
    //   ];
    //   let [open,setOpen]=useState(false);
    // return (
    //   <div classNameName='shadow-md w-full fixed top-0 left-0'>
    //     <div classNameName='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    //     <div classNameName='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    //     text-gray-800'>
    //       <span classNameName='text-3xl text-indigo-600 mr-1 pt-2'>
    //       <ion-icon name="logo-ionic"></ion-icon>
    //       </span>
    //       Designer
    //     </div>
        
    //     <div onClick={()=>setOpen(!open)} classNameName='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    //     <ion-icon name={open ? 'close':'menu'}></ion-icon>
    //     </div>
  
    //     <ul classNameName={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
    //       {
    //         Links.map((link)=>(
    //           <li key={link.name} classNameName='md:ml-8 text-xl md:my-0 my-7'>
    //             <a href={link.link} classNameName='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
    //           </li>
    //         ))
    //       }
    //       <Button>
    //         Get Started
    //       </Button>
    //     </ul>
    //     </div>
    //   </div>
    // )

    return(
        <header className="bg-white flex justify-between items-center w-full px-20 h-20 fixed top-0 ">
        {/* <nav className="flex justify-between items-center w-[92%]  mx-auto"> */}
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."/>
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 m-0">
                    <li onClick={()=>navigate("/home")}>
                        <p className="hover:bg-black  cursor-pointer px-3 py-2 duration-150 rounded-lg m-0 hover:text-white">Home</p>
                    </li>
                    <li>
                        <p className="hover:bg-black  cursor-pointer px-3 py-2 duration-150 rounded-lg m-0 hover:text-white">About</p>
                    </li>
                    <li>
                        <p className="hover:bg-black  cursor-pointer px-3 py-2 duration-150 rounded-lg m-0 hover:text-white">Contact</p>
                    </li>
                    <li onClick={()=>navigate("/view")}>
                        <p className="hover:bg-black  cursor-pointer px-3 py-2 duration-150 rounded-lg m-0 hover:text-white">View</p>
                    </li>
                    <li onClick={()=>navigate("/addBlog")}>
                        <p className="hover:bg-black  cursor-pointer px-3 py-2 duration-150 rounded-lg m-0 hover:text-white">Add Blog</p>
                    </li> 
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#669eff] text-white px-5 py-2 rounded-full hover:bg-[#5090ff]">Sign in</button>
                <button className="bg-[#669eff] text-white px-5 py-2 rounded-full hover:bg-[#5090ff]">Sign up</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
    </header>
    )
}

export default Navbar