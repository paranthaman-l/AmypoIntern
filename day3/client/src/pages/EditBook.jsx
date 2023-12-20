import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom';
import { useStates } from '../States';
import BookService from '../services/BookService';

const EditBook = () => {
    const { books, setBooks } = useStates();
    const { id } = useParams();
    const [book, setBook] = useState({});
    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        books[id] = book;
        setBooks(books);
        await BookService.putBook(id, book).then((response) => {
            toast.success(response.data);
            setTimeout(() => {
                navigate("/library")
            }, 1000);
        }).catch((err) => {
            console.log(err);
            toast.error("Some thing ")
        })
        // toast.success("Books updated")
    }
    const getBook = async (bid) => {
        await BookService.getById(bid).then((response) => {
            setBook(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getBook(id);
    }, [])

    return (
        <div className='pl-52 flex justify-center items-center h-screen'>
            <Toaster />
            <form onSubmit={handleSubmit} className="bg-white text-black h-1/2 w-1/2 rounded-xl flex flex-col p-8">
                <p className='font-poppins '>Edit Book</p>
                <div className="flex flex-col justify-center items-center">
                    <input required={true} value={book?.bookImage} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookImage" id="" placeholder='Book Image' />
                    <input required={true} value={book?.bookName} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookName" id="" placeholder='Book Name' />
                    <input required={true} value={book?.bookAuthorName} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookAuthorName" id="" placeholder='Book Author Name' />
                    <input required={true} value={book?.bookShelfNo} type="text" onChange={handleChange} className='py-2 px-2 outline-none border-b-[1px] w-1/2 mt-5' name="bookShelfNo" id="" placeholder='Book Shelf No' />
                </div>
                <input type="submit" value="Update" className='mt-10 bg-blue-500 w-fit mx-auto px-1 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-800 duration-200' />
            </form>
        </div>
    )
}

export default EditBook