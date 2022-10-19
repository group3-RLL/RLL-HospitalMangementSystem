package com.ehospital.entity.users;


import static org.testng.Assert.assertEquals;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.ehospital.dao.UserRepository;
import com.ehospital.entity.User;
@SpringBootTest
public class UserTest {
	
	@Autowired
	private UserRepository userRepo;
	
	@Test
	public void authenticationTest() {
		
		User user =new User();
		user.setUsername("gaurav@gmail.com");
		user.setPassword("@aayu0143@");
		user.setRole("Admin");
		
		userRepo.save(user);
		
		assertEquals("gaurav@gmail.com",user.getUsername());
		assertEquals("@aayu0143@", user.getPassword());
		assertEquals("Admin", user.getRole());
		
	
		
		
		
	}

}
