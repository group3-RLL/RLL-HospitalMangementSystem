package com.ehospital.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ehospital.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>{

}
