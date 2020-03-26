package com.example.ecommerce.repository;

import com.example.ecommerce.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String usernmame);

    User findByEmail(String email);

    List<User> findAll();
}
