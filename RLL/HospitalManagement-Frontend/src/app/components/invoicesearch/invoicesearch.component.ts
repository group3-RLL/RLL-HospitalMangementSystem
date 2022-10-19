import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/common/invoice';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Invoicesearch } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoicesearch.component.html',
  styleUrls: ['./invoicesearch.component.css']
})
export class InvoicesearchComponent implements OnInit {
  invoice: Invoice[] = [];
  searchID:any;
  currentInvoice: any;
  
  
  constructor(public invoicesearch: Invoicesearch, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    }
      getInvoice(): void {
        this.invoicesearch.read(this.searchID)
          .subscribe(
            invoice => {
              this.currentInvoice = invoice;
              console.log(invoice);
              this.searchID='';
            },
            error => {
              console.log(error);
            });
      }

    }
    

