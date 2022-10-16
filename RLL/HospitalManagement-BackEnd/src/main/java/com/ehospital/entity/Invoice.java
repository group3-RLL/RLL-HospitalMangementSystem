package com.ehospital.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="invoice")
public class Invoice {
	
	@Id
	private int id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="admitdate")
	private String admitdate;
	
	@Column(name="releasedate")
	private String releasedate;
	
	@Column(name="patientname")
	private String patientname;
	
	@Column(name="patientmobile")
	private String patientmobile;
	
	@Column(name="patientaddress")
	private String patientaddress;
	
	@Column(name="disease")
	private String disease;
	
	@Column(name="roomcharge")
	private int roomcharge;
	
	@Column(name="doctorfee")
	private int doctorfee;
	
	@Column(name="medicinecost")
	private int medicinecost;
	
	@Column(name="othercharge")
	private int othercharge;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdmitdate() {
		return admitdate;
	}

	public void setAdmitdate(String admitdate) {
		this.admitdate = admitdate;
	}

	public String getReleasedate() {
		return releasedate;
	}

	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}

	public String getPatientname() {
		return patientname;
	}

	public void setPatientname(String patientname) {
		this.patientname = patientname;
	}

	public String getPatientmobile() {
		return patientmobile;
	}

	public void setPatientmobile(String patientmobile) {
		this.patientmobile = patientmobile;
	}

	public String getPatientaddress() {
		return patientaddress;
	}

	public void setPatientaddress(String patientaddress) {
		this.patientaddress = patientaddress;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public int getRoomcharge() {
		return roomcharge;
	}

	public void setRoomcharge(int roomcharge) {
		this.roomcharge = roomcharge;
	}

	public int getDoctorfee() {
		return doctorfee;
	}

	public void setDoctorfee(int doctorfee) {
		this.doctorfee = doctorfee;
	}

	public int getMedicinecost() {
		return medicinecost;
	}

	public void setMedicinecost(int medicinecost) {
		this.medicinecost = medicinecost;
	}

	public int getOthercharge() {
		return othercharge;
	}

	public void setOthercharge(int othercharge) {
		this.othercharge = othercharge;
	}

	
	

}


