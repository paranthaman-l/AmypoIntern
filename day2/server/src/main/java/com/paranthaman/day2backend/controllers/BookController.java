package com.paranthaman.day2backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.day2backend.models.Book;
import com.paranthaman.day2backend.services.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin
@RequestMapping("/book")
public class BookController {
    
    @Autowired
    private BookService bookService;
    @PostMapping("/post")
    public String postBook(@RequestBody Book book) {
        return bookService.postBook(book);
    }
    @GetMapping("/get")
    public List<Book> getAllBook() {
        return bookService.getAllBook();
    }
    
    @GetMapping("/getById/{bid}")
    public Book getBook(@PathVariable String bid) {
        return bookService.getBook(bid);
    }
    
    @DeleteMapping("/delete/{bid}")
    public String deleteBook(@PathVariable String bid) {
        return bookService.deleteBook(bid);
    }
    @PutMapping("/put/{bid}")
    public String putBook(@RequestBody Book book, @PathVariable String bid) {
        return bookService.putMapping(bid,book);
    }
    
}
 