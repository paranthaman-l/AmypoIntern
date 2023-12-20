import React from 'react'
import deleteIcon from '../assets/delete.png'
import editIcon from '../assets/edit.png'
import { useNavigate } from 'react-router-dom'
import { useStates } from '../States';
import BookService from '../services/BookService';
import toast, { Toaster } from 'react-hot-toast';
const Book = ({ book, i,deleteBook }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center relative' >
            <Toaster/>
            <img onClick={() => { navigate(`/viewBook/` + book.bid) }} src={book?.bookImage} className='h-32 w-28 cursor-pointer before:bg-black' alt="" />
            <img onClick={() => { navigate(`/editBook/` + book.bid) }} src={editIcon} className='p-1 rounded-md h-6 cursor-pointer w-6 bg-white absolute right-16 bottom-16' alt="" />
            <img onClick={()=>deleteBook(book.bid)} src={deleteIcon} className='p-1 rounded-md h-6 cursor-pointer w-6 bg-white absolute right-7 bottom-16' alt="" />
            <div onClick={() => { navigate(`/editBook/` + i) }} className="flex mt-3 flex-col items-center">
                <p className='font-poppins'>{book?.bookName}</p>
                <p className='font-alata'>{book?.bookAuthorName}</p>
            </div>
        </div>
    )
}

export default Book