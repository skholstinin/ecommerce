package com.example.ecommerce.service;


import com.example.ecommerce.domain.User;
import com.example.ecommerce.domain.security.UserRole;

import java.util.Set;

public interface UserService {

    User createUser(User user, Set<UserRole> userRoles);
}
