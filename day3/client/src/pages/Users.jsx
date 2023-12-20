import React, { useEffect, useState } from 'react'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../assets/delete.png'
import editIcon from '../assets/edit.png'
import viewIcon from '../assets/show.png'

const Users = () => {
    const [users,setUsers] = useState();
    const navigate = useNavigate();
    const getData =async ()=>{
        await AuthService.getUser().then((response)=>{
            setUsers(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
   useEffect(() => {
        getData();
   }, [])
   const deleteUser =async(uid)=>{
    await AuthService.deleteUser(uid).then((response)=>{
        getData();
    }).catch((err)=>{
        console.log(err);
    })
   }
  return (
    <div className="flex pl-52 justify-center items-start">

    <table className='w-full bg-white text-black mx-10 rounded-t-2xl border-none  mt-20'>
    <thead>
        <tr className=' rounded-xl font-alata '>
            <th>S No.</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>MobileNo</th>
            <th>DOB</th>
            <th>City</th>
            <th className='text-center'>Action</th>
        </tr>
    </thead>
    {users?.map((user, i) => {
        return (
            // <Book deleteBook={deleteBook} book={book} key={i} i={i} />
            <tr className='text-center font-poppins'>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.rollNo}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
                <td className='flex justify-evenly items-center h-20 w-full '>
                    <img onClick={() => { navigate(`/viewBook/` + user.uid) }} src={viewIcon} className='p-1 rounded-md h-7  cursor-pointer w-7 bg-white ' alt="" />
                    <img onClick={() => { navigate(`/editBook/` + user.uid) }} src={editIcon} className='p-1 rounded-md h-7  cursor-pointer w-7 bg-blue-200 ' alt="" />
                    <img onClick={() => deleteUser(user.uid)} src={deleteIcon} className='p-1 rounded-md h-7  cursor-pointer w-7 bg-red-200' alt="" />
                </td>
            </tr>
        )
    })}
</table>
    </div>
  )
}

export default Users