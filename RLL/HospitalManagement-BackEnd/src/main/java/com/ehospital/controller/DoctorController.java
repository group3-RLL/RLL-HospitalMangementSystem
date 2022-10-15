package com.ehospital.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ehospital.entity.Doctor;
import com.ehospital.dao.DoctorRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    // get all products
    @GetMapping("/doctor")
    public List<Doctor> getAlldoctors(){
        return doctorRepository.findAll();
    }

    // create product rest api
    @PostMapping("/doctor/addnew")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // get product by id rest api
    @GetMapping("/doctor/{id}")
    public ResponseEntity<Doctor> getdoctorByCount(@PathVariable int id) {
    	Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No results found."));
        return ResponseEntity.ok(doctor);
    }

    // update product rest api

    @PutMapping("/doctor/{id}/edit")
    public void editDoctor(@PathVariable("id") Integer id, @RequestBody Doctor doctor) {
        doctorRepository.save(doctor);
    }

    // delete product rest api
    @DeleteMapping("/doctor/{id}/delete")
    public ResponseEntity<Map<String, Boolean>> deleteDoctor(@PathVariable int id){
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No results found."));

        doctorRepository.delete(doctor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
