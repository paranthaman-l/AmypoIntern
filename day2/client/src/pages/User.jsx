import React, { useEffect, useState } from 'react'
import AuthService from '../services/AuthService';

const User = () => {
    const [user,setUser] = useState();

    useEffect(() => {
        getUser();
    }, [])
    const getUser = async()=>{
        await AuthService.loginById(localStorage.getItem("uid")).then((response)=>{
            setUser(response.data)
        })
    }
    
  return (
    <div className='flex justify-center items-center h-screen'>
        {user?.name}
    </div>
  )
}

export default User