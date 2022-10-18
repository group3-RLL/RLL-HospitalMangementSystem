package com.ehospital.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ehospital.entity.Invoice;


@CrossOrigin("http://localhost:4200")
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {

}

