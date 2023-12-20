import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BookService from '../services/BookService';

const ViewBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    const navigate = useNavigate()

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
        <div className='pl-60 flex items-start'>
            <div className="">
                <img src={book.bookImage} alt="" />
            </div>
            <div className="">
                <table>
                    <tbody>
                        <tr className=''>
                            <td>Book Name : <span>{book.bookName}</span></td>
                        </tr>
                        <tr>
                            <td>Book AuthorName : <span>{book.bookAuthorName}</span></td>
                        </tr>
                        <tr>
                            <td>Book ShelfNo : <span>{book.bookShelfNo}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewBook