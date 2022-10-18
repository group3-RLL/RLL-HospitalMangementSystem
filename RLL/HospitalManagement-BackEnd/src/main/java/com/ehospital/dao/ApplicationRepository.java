package com.ehospital.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ehospital.entity.Application;


@CrossOrigin("http://localhost:4200")
public interface ApplicationRepository extends JpaRepository<Application, Integer> {

}

