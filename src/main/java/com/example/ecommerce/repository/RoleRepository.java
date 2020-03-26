package com.example.ecommerce.repository;

import com.example.ecommerce.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
