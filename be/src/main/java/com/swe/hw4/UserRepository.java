package com.swe.hw4;

import com.swe.hw4.bean.StudentBean;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * Spring Data interface for generic CRUD operations
 * @author Deep Kumar
 *
 */
public interface UserRepository extends CrudRepository<StudentBean, String> {

}
