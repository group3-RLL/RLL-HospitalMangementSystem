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

import com.ehospital.dao.InvoiceRepository;
import com.ehospital.entity.Invoice;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")

public class InvoiceController {
	
	@Autowired
	private InvoiceRepository invoiceRepository;
	
	@GetMapping("/invoice")
	public List<Invoice> getAllInvoices(){
		return invoiceRepository.findAll();
	}
	
	@PostMapping("/invoice")
	public Invoice createInvoice(@RequestBody Invoice invoice) {
		return invoiceRepository.save(invoice);
	}
	
	@GetMapping("/invoice/{id}")
	public ResponseEntity<Invoice> getInvoiceById(@PathVariable int id) throws AttributeNotFoundException {
		
		Invoice invoice = invoiceRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Not found" + id));
		
		return ResponseEntity.ok(invoice);
	}
	
	

}