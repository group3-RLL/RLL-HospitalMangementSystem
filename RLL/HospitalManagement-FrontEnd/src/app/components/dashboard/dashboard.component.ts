import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string = localStorage.getItem('username');
  doctor: Doctor= new Doctor();
    closeResult: string;
    editForm: FormGroup;
    deleteId:String;
    constructor(private fb: FormBuilder ,private route: ActivatedRoute, private httpClient: HttpClient, private modalService: NgbModal) { }
  
    ngOnInit() {
      this.username = localStorage.getItem('username');
      this.route.paramMap.subscribe(() => {
        this.getDoctors();
        this.editForm = this.fb.group({
            id:[''],
            name: [''],
            age: [''],
            gender: [''],
            blood: [''],
            dept: [''],
            phone: [''],
            email: [''],
            status: [''],
            address: [''],
            room: ['']
          } );
      });
    }
    getDoctors(){
        this.httpClient.get<any>('http://localhost:9090/api/v1/doctor').subscribe(
          response => {
            console.log(response);
            this.doctor = response;
          }
        );
      }

      open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
      
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }

      onSubmit(f: NgForm) {
        const url = 'http://localhost:9090/api/v1/doctor';
        this.httpClient.post(url, f.value)
          .subscribe((result) => {
            this.ngOnInit(); //reload the table
          });
        this.modalService.dismissAll(); //dismiss the modal
      }

      openDetails(targetModal: any, doctor: Doctor) {
        this.modalService.open(targetModal, {
         centered: true,
         backdrop: 'static',
         size: 'lg'
       });
       
        document.getElementById('name').setAttribute('value', doctor.name);
        document.getElementById('age').setAttribute('value', doctor.age);
        document.getElementById('gender').setAttribute('value', doctor.gender);
        document.getElementById('blood').setAttribute('value', doctor.blood);
        document.getElementById('dept').setAttribute('value', doctor.dept);
        document.getElementById('phone').setAttribute('value', doctor.phone);
        document.getElementById('email').setAttribute('value', doctor.email);
        document.getElementById('status').setAttribute('value', doctor.status);
        document.getElementById('address').setAttribute('value', doctor.address);
        document.getElementById('room').setAttribute('value', doctor.room);
    
    }

    openEdit(targetModal, doctor: Doctor) {
        this.modalService.open(targetModal, {
         centered: true,
         backdrop: 'static',
         size: 'lg'
       });
       
       this.editForm.patchValue( {
        id: doctor.id,
        name: doctor.name,
        age: doctor.age,
        gender: doctor.gender,
        blood: doctor.blood,
        dept: doctor.dept,
        phone: doctor.phone,
        email: doctor.email,
        status: doctor.status,
        address: doctor.address,
        room: doctor.room
      });
    }

    onSave() {
        const editURL = 'http://localhost:9090/api/v1/doctor/'+this.editForm.value.id;
        console.log(this.editForm.value);
        this.httpClient.put(editURL, this.editForm.value)
          .subscribe(  data =>{
            console.log(data)
            this.ngOnInit();
            this.modalService.dismissAll();
          });
      }

      openDelete(targetModal, doctor: Doctor) {
        this.deleteId = doctor.id;
        this.modalService.open(targetModal, {
          backdrop: 'static',
          size: 'lg'
        });
      }

      onDelete() {
        const deleteURL = 'http://localhost:9090/api/v1/doctor/'+ this.deleteId;
        this.httpClient.delete(deleteURL)
          .subscribe((results) => {
            this.ngOnInit();
            this.modalService.dismissAll();
          });
      }
  
  }
