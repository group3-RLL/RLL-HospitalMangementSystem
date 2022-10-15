package com.ehospital.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.ehospital.dao.AppointmentRepository;
import com.ehospital.entity.Appointment;
import com.ehospital.entity.Doctor;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")

public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@GetMapping("/appointment")
	public List<Appointment> getAllAppointments(){
		return appointmentRepository.findAll();
	}
	
	@PostMapping("/appointment")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping("/appointment/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable int id) throws AttributeNotFoundException {
		
		Appointment appointment = appointmentRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Not found" + id));
		
		return ResponseEntity.ok(appointment);
	}
	
    // update product rest api

    @PutMapping("/appointment/{id}")
    public void editDoctor(@PathVariable("id") Integer id, @RequestBody Appointment appointment) {
        appointmentRepository.save(appointment);
    }

	
	@DeleteMapping("/appointment/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable int id) throws AttributeNotFoundException{
		
		Appointment appointment = appointmentRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Not found" + id));
		
		appointmentRepository.delete(appointment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	

}
