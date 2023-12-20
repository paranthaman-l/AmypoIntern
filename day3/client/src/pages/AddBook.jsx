import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useStates } from '../States';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const AddBook = () => {
    const [book, setBook] = useState();
    const {setBooks} = useStates();
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        AddBookIntoLibrary(book);
        await BookService.postBook(book).then((resposnse)=>{
            toast.success(resposnse.data);
        }).catch((err) => {
            console.log(err);
        })
        // toast.success("Book Added successfully")
        setTimeout(() => {
            navigate("/library")
        }, 1000);
        // toast.promise(
        //     AddBookIntoLibrary(book),
        //     {
        //         loading: 'Adding...',
        //         success: <b>Book Added!</b>,
        //         error: <b>Could not Add.</b>,
        //     }
        // );
    }
    const AddBookIntoLibrary = (book) => {
        setBooks((prev)=>[...prev, book])
    }
    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value })
    }
    return (
        <div className='pl-52 flex justify-center items-center h-screen'>
            <Toaster />
            <form onSubmit={handleSubmit} className="bg-white text-black h-1/2 w-1/2 rounded-xl flex flex-col p-8">
                <p className='font-poppins '>Add Book</p>
                <div className="flex flex-col justify-center items-center">
                    <input required={true} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookImage" id="" placeholder='Book Image' />
                    <input required={true} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookName" id="" placeholder='Book Name' />
                    <input required={true} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookAuthorName" id="" placeholder='Book Author Name' />
                    <input required={true} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookShelfNo" id="" placeholder='Book Shelf No' />
                </div>
                <input type="submit" value="Add Book" className='mt-10 bg-blue-500 w-fit mx-auto px-1 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-800 duration-200' />
            </form>
        </div>
    )
}

export default AddBook