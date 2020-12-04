package com.swe.hw4;

import com.swe.hw4.bean.DataBean;
import com.swe.hw4.bean.StudentBean;
import com.swe.hw4.bean.StudentRegistrationBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

/**
 *
 * Application class for the projects
 * Contains all the REST Endpoints for the application
 * @author Deep Kumar
 *
 */
@SpringBootApplication
@CrossOrigin(maxAge = 3600)
@RestController
public class Hw4Application {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private StatCalculator statCalc;


    public static void main(String[] args) {
        SpringApplication.run(Hw4Application.class, args);
    }

    /**
     * rest endpoint to get student details based on student id
     * @param studentid
     * @return student bean object
     */
    @GetMapping("/getStudent")
    public StudentBean getStudent(@RequestParam(value = "id") String studentid) {
        return userRepo.findById(studentid).get();
    }

    /**
     * rest endpoint to get detail for all the students
     * @return list of student bean objects
     */
    @GetMapping("getAllStudents")
    public List<StudentBean> getAllStudents() {
        List<StudentBean> sbList = new ArrayList<>();
        userRepo.findAll().forEach(sbList::add);
        return sbList;
    }

    /**
     * rest endpoint to add new student detail in the database
     * @param regBean
     * @return mean and standard deviation
     */
    @PostMapping("/addStudent")
    @ResponseStatus(HttpStatus.CREATED)
    public DataBean addStudent(@Valid @RequestBody StudentRegistrationBean regBean) {

        String data = regBean.getData();
        userRepo.save(regBean.getStudentBean());
        return statCalc.calculateMeanAndStd(data);
    }

}
