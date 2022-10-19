package com.ehospital.dao;



import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.ehospital.entity.Application;

@SpringBootTest
public class ApplicationRepoTest {
	
	@Autowired
	private ApplicationRepository applicationRepo;
	
	@Test
	void findValuesOfApplication() {
		Application application=new  Application();
		 application.setId(4);
		 application.setAge("55");
		 applicationRepo.save(application);
		
		System.out.println("Application Id is  :"+application.getId());
		System.out.println("Applicant Age is  :"+application.getAge());
		
		
		
		
	}
	
	
}
