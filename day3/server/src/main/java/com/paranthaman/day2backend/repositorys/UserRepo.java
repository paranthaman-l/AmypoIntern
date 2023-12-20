package com.paranthaman.day2backend.repositorys;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.paranthaman.day2backend.models.User;

@Repository
public interface UserRepo extends CrudRepository<User,String>{

    User findByEmail(String email);

    List<User> findAllByRole(String string);
    
}
