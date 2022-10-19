package com.ehospital;
import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ehospital.dao.ApplicationRepository;
import com.ehospital.dao.AppointmentRepository;
import com.ehospital.dao.DoctorRepository;
import com.ehospital.dao.InvoiceRepository;
import com.ehospital.dao.PatientRepository;
import com.ehospital.dao.UserRepository;
import com.ehospital.entity.Application;
import com.ehospital.entity.Appointment;
import com.ehospital.entity.Doctor;
import com.ehospital.entity.Invoice;
import com.ehospital.entity.Patient;
import com.ehospital.entity.User;

@SpringBootTest
class HospitalManagementBackEnd1ApplicationTests {
	
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	
	
	@Test
	public void adddoctor() {
		
		Doctor doctor1=new Doctor();
		doctor1.setName("Gaurav");
		doctor1.setAge("35");
		doctor1.setAddress("bheski");
		doctor1.setBlood("ab+");
		doctor1.setDept("md");
		doctor1.setGender("male");
		doctor1.setEmail("gaurav@gmail.com");
		doctor1.setPhone("8808114788");
		doctor1.setRoom(12);
		doctor1.setStatus("active");
		
		
		Doctor doctor2=new Doctor();
		doctor2.setName("Himanshu");
		doctor2.setAge("36");
		doctor2.setAddress("delhi");
		doctor2.setBlood("a+");
		doctor2.setDept("mbbs");
		doctor2.setGender("male");
		doctor2.setEmail("hims@gmail.com");
		doctor2.setPhone("7217873350");
		doctor2.setRoom(11);
		doctor2.setStatus("active");
		
		ArrayList<Doctor> list = new ArrayList<Doctor>();
		list.add(doctor1);
		list.add(doctor2);
		doctorRepo.saveAll(list);
	}
	
	@Autowired
	private PatientRepository patientRepo;
	
	
	@Test
	
	public void addPatient() {
		
		ArrayList<Patient> patients = new ArrayList<Patient>();
		Patient patient1=new Patient();
		patient1.setFname("Aayushi");
		patient1.setLname("Mishra");
		patient1.setAddress("Delhi");
		patient1.setDob("10/10/2000");
		patient1.setDisease("cold");
		patient1.setEmail("aayu@gmail.com");
		patient1.setGender("female");
		patient1.setPhone("363695");
		patient1.setRoom("32");
		
		
		Patient patient2=new Patient();
		patient2.setFname("Swati");
		patient2.setLname("Chaudhary");
		patient2.setAddress("Gurugram");
		patient2.setDob("29/11/2000");
		patient2.setDisease("Back Pain");
		patient2.setEmail("swati@gmail.com");
		patient2.setGender("female");
		patient2.setPhone("36369545");
		patient2.setRoom("23");
		
		patients.add(patient1);
		patients.add(patient2);
		patientRepo.saveAll(patients);
		
		
	}
	
	@Test
	public void updatePatient() {
		Patient patient2 = new Patient();
		patient2.setId(2);
		patient2.setFname("Alok");
		patient2.setLname("Chaudhary");
		patient2.setAddress("Gurugram");
		patient2.setDob("29/11/2000");
		patient2.setDisease("Fever");
		patient2.setEmail("Alok@gmail.com");
		patient2.setGender("male");
		patient2.setPhone("8808114788");
		patient2.setRoom("24");
		
		patientRepo.save(patient2);
		

	}
	
	@Autowired
	private AppointmentRepository appointmentsRepo;
	
	@Test
	public void addAppointment() {
		
		ArrayList<Appointment> appointments = new ArrayList<Appointment>();
		Appointment appointment1 = new Appointment();
		appointment1.setId(1);
		appointment1.setPname("Ram");
		appointment1.setSymptoms("Rash");
		
		
		
		Appointment appointment2 = new Appointment();
		appointment2.setId(2);
		appointment2.setPname("shyam");
		appointment2.setSymptoms("shakingchills");
		appointments.add(appointment1);
		appointments.add(appointment2);
		
		appointmentsRepo.saveAll(appointments);
		
		
		
		
	}
	
	@Autowired
	private UserRepository userRepo ;
	
	
	@Test
	public void addUser() {
		
		ArrayList<User> users = new ArrayList<User>();
		User user1= new User();
		user1.setUsername("Gurmeet");
		user1.setRole("Doctor");
		user1.setPassword("@123@");
		
		User user2= new User();
		user2.setUsername("Guruji");
		user2.setRole("Admin");
		user2.setPassword("@1234@");
		
		User user3 =new User();
		user3.setUsername("Aayushi");
		user3.setPassword("@12@");
		user3.setRole("Patient");
		
		users.add(user1);
		users.add(user2);
		users.add(user3);
		userRepo.saveAll(users);
	}
	
	@Autowired
	InvoiceRepository invoiceRepo;
	
	@Test
	public void addInvoice() {
		
		Invoice invoice= new Invoice();
		invoice.setAdmitdate("10/02/2020");
		invoice.setDisease("cancer");
		invoice.setDoctorfee("1000");
		invoice.setMedicinecost("150000");
		invoice.setOthercharge("20000");
		invoice.setPatientaddress("delhi");
		invoice.setPatientmobile("7214586");
		invoice.setPatientname("ramkumar");
		invoice.setReleasedate("10/03/2020");
		invoice.setRoomcharge("20500");
		
		invoiceRepo.save(invoice);
		
		
		
		
	}
	
	@Autowired
	ApplicationRepository applicationRepo;
	
	@Test
	public void addApplication() {
		
		Application application =new Application();
		application.setId(2);
		application.setName("Gaurav");
		application.setNumber("7217873350");
		application.setQual("MBBs");
		application.setAge("29");		
		applicationRepo.save(application);
	}
	
	

}
