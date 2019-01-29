import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public columns = ['id', 'reference'];
  public rows : Array<Order>;

  constructor(public apiService: ApiService, public router : Router) { }

  public delete(id:string) {
    console.log("delete: " + id);
    var path = 'orders/' + id;
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
    console.log("update: " + id);
    this.router.navigateByUrl('/orders/add/' + id);
  }

  ngOnInit() {
    this.apiService.get("orders").subscribe((data : Order[]) => {
      console.log(data);
      this.rows = data;
    })
  }

}
