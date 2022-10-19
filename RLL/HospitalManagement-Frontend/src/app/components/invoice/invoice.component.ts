import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/common/invoice';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice= new Invoice();
  patientname:any;
  
  
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.getInvoice();
      
    });
  }
  
  getInvoice(){
      this.httpClient.get<any>('http://localhost:9090/api/v1/invoice').subscribe(
        response => {
          console.log(response);
          this.invoice= response;
        }
      );
    }
    }

