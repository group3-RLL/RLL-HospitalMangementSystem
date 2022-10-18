package com.ehospital.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ehospital.dao.ApplicationRepository;
import com.ehospital.entity.Application;
import com.ehospital.entity.Doctor;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")

public class ApplicationController {
	
	@Autowired
	private ApplicationRepository applicationRepository;
	
	@GetMapping("/application")
	public List<Application> getAllApplications(){
		return applicationRepository.findAll();
	}
	
	@PostMapping("/application")
	public Application createApplication(@RequestBody Application application) {
		return applicationRepository.save(application);
	}
	 // delete product rest api
    @DeleteMapping("/application/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteApplication(@PathVariable int id){
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No results found."));

        applicationRepository.delete(application);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}