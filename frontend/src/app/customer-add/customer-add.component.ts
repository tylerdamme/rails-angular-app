import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  public customer: Customer = new Customer();

  constructor(private router: Router, public apiService: ApiService, public acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any) => {
      console.log(data.id);
      if (data && data.id) {
        this.apiService.get("customers/" + data.id).subscribe((data: Customer) => {
          this.customer = data;
        });
      } else {
        this.customer = new Customer();
      }
    })
  }

  public onSubmit() {
    console.log("Adding a customer: " + this.customer.name);
    if (this.customer.id) {
      this.apiService.update("customers/" + this.customer.id, this.customer).subscribe((r) => {
        console.log(r);
        alert("Customer updated!");
        this.router.navigateByUrl("/customers");
      });
    } 
    else {
      this.apiService.post("customers", this.customer).subscribe((r) => {
        console.log(r);
        this.customer = new Customer();
        alert("Customer Successfully Added!");
        this.router.navigateByUrl("/customers");
      });
    }
  }

}
