package com.ehospital.entity;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="doctor")
@Data
public class Doctor {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	   

	    @Column(name = "id")
	    private int id;

	    @Column(name = "name")
	    private String name;
	    
	    @Column(name = "age")
	    private String age;
	    
	    @Column(name = "gender")
	    private String gender;

	    @Column(name = "blood")
	    private String blood;
	    
	    @Column(name = "dept")
	    private String dept;
	    
	    @Column(name = "phone")
	    private String phone;
	    
	    @Column(name = "email")
	    private String email;
	    
	    @Column(name = "status")
	    private String status;
	    
	    @Column(name = "address")
	    private String address;
	    
	    @Column(name = "room")
	    private int room;


		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getAge() {
			return age;
		}

		public void setAge(String age) {
			this.age = age;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getBlood() {
			return blood;
		}

		public void setBlood(String blood) {
			this.blood = blood;
		}

		public String getDept() {
			return dept;
		}

		public void setDept(String dept) {
			this.dept = dept;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public int getRoom() {
			return room;
		}

		public void setRoom(int room) {
			this.room = room;
		}
	    
	    
	    

	    

}



