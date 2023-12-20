package com.paranthaman.day2backend.repositorys;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.paranthaman.day2backend.models.Book;

@Repository
public interface BookRepo extends CrudRepository<Book,String>{
    
}
