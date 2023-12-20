package com.paranthaman.day2backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paranthaman.day2backend.models.Book;
import com.paranthaman.day2backend.repositorys.BookRepo;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepo;
    public String postBook(Book book) {
        bookRepo.save(book);
        return "Book Added Successfully";
    }

    public List<Book> getAllBook() {
        return (List<Book>) bookRepo.findAll();
    }

    public String deleteBook(String bid) {
        Book book = bookRepo.findById(bid).get();
        if(book != null) {
            bookRepo.deleteById(bid);
            return book.getBookName()+" Book Deleted Successfully";
        }
        return "Book Not Found";
    }

    public String putMapping(String bid, Book book) {
        book.setBid(bid);
        bookRepo.save(book);
        return "Book Updated Successfully";
    }

    public Book getBook(String bid) {
        return bookRepo.findById(bid).get();
    }

}
