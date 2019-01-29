import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  public order: Order = new Order();

  constructor(private router: Router, public apiService: ApiService, public acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      console.log(data.id);
      if (data && data.id) {
        this.apiService.get("orders/" + data.id).subscribe((data: Order) => {
          this.order = data;
        });
      } else {
        this.order = new Order();
      }
    })
  }

  public onSubmit() {
    console.log("Adding an order: " + this.order.reference);
    if (this.order.id) {
      this.apiService.update("orders/" + this.order.id, this.order).subscribe((r) => {
        console.log(r);
        alert("Order updated!");
        this.router.navigateByUrl("/orders");
      });
    } else {
      this.apiService.post("orders", this.order).subscribe((r) => {
        console.log(r);
        this.order = new Order();
        alert("Order Successfully Added!");
        this.router.navigateByUrl("/orders");
      });
    }
  }

}
