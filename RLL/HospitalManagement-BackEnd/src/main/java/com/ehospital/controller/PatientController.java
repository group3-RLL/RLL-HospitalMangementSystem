package com.ehospital.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.ehospital.entity.Patient;
import com.ehospital.dao.PatientRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {
	
	@Autowired
	private PatientRepository patientrepository;
	
	
	//get all employees
	
	@GetMapping("/patient")
	public List <Patient> getAllPatients(){
		return patientrepository.findAll();
	}
	
	// create employee rest api
		@PostMapping("/patient")
		public Patient createPatient(@RequestBody Patient patient) {
			return patientrepository.save(patient);
		}
		
		// get employee by id rest api
		@GetMapping("/patient/{id}")
		public ResponseEntity<Patient> getPatientById(@PathVariable int id) {
			Patient patient = patientrepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Patient does  not exist with id :" + id));
			return ResponseEntity.ok(patient);
		}
		
		// update employee rest api
		
		@PutMapping("/patient/{id}")
		public ResponseEntity<Patient> updateEmployee(@PathVariable int id, @RequestBody Patient patientDetails){
			Patient patient = patientrepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
			
			patient.setFname(patientDetails.getFname());
			patient.setLname(patientDetails.getLname());
			patient.setEmail(patientDetails.getEmail());
			patient.setDob(patientDetails.getDob());
			patient.setPhone(patientDetails.getPhone());
			patient.setGender(patientDetails.getGender());
			patient.setDisease(patientDetails.getDisease());
			patient.setRoom(patientDetails.getRoom());
			patient.setAddress(patientDetails.getAddress());
			
			
			Patient updatedPatient = patientrepository.save(patient);
			return ResponseEntity.ok(updatedPatient);
		}
		
		// delete employee rest api
		@DeleteMapping("/patient/{id}")
		public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable int id){
			Patient patient = patientrepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
			
			patientrepository.delete(patient);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
