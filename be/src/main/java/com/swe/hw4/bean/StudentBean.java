package com.swe.hw4.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

/**
 * Bean class for student related details
 *
 * @author Deep Kumar
 */
@Entity
@Table(name = "SWE_DATABASE")
public class StudentBean {
    @Id
    @NotEmpty(message = "Missing student id")
    @Pattern(regexp = "^[a-zA-Z0-9]*$")
    private String studentid;

    @Pattern(regexp = "^[\\p{L} .'-]+$")
    @NotEmpty(message = "Missing first name")
    private String firstname;

    @NotEmpty(message = "Missing last name")
    @Pattern(regexp = "^[\\p{L} .'-]+$")
    private String lastname;

    @NotEmpty(message = "Missing email id")
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    private String email;

    @NotEmpty(message = "Missing  phone number")
    @Pattern(regexp = "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$")
    private String phone;

    private String url;

    @NotEmpty(message = "Missing street address")
    private String address;

    @NotEmpty(message = "Missing zip code")
    @Pattern(regexp = "^\\d{5}(?:[-\\s]\\d{4})?$")
    private String zipcode;

    @NotEmpty(message = "Missing city name")
    private String city;

    @NotEmpty(message = "Missing state name")
    private String state;

    @NotEmpty(message = "Missing student comment")
    private String comments;


    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstName) {
        this.firstname = firstName;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastName) {
        this.lastname = lastName;
    }

    public String getStudentid() {
        return studentid;
    }

    public void setStudentid(String studentId) {
        this.studentid = studentId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
