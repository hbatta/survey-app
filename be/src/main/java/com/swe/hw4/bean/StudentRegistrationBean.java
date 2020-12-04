package com.swe.hw4.bean;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

/**
 *
 * Request object for adding new student detail
 * @author Deep Kumar
 *
 */
public class StudentRegistrationBean {

    @Valid
    private StudentBean studentBean;

    @NotEmpty(message = "Missing input numbers")
    private String data;

    public StudentBean getStudentBean() {
        return studentBean;
    }

    public void setStudentBean(StudentBean studentBean) {
        this.studentBean = studentBean;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
