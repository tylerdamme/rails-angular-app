import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public columns = ['id', 'name'];
  public rows : Array<Customer>;

  constructor(public apiService: ApiService, public router: Router) { }

  public delete(id:string) {
    console.log("delete: " + id);
    var path = 'customers/' + id;
    this.apiService.delete(path).subscribe((r) => {
      this.rows = this.rows.filter((p,i) => {
        if (Number(id) === p.id) {
          return false;
        }
          return true;
      },this.rows)
    });
  }

  public update(id:string) {
    console.log("update " + id);
    this.router.navigateByUrl('/customers/add/' + id);
  }

  ngOnInit() {
    this.apiService.get("customers").subscribe((data: Customer[]) => {
      console.log(data);
      this.rows = data;
    });
  }

}
