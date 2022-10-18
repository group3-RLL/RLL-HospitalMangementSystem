package com.ehospital.dao;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import com.ehospital.entity.Doctor;


@CrossOrigin("http://localhost:4200")
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    // all 


    Page<Doctor> findAll(Pageable pageable);

   


}