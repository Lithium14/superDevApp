import { Discount } from './../../../shared/models/discount';
import { DiscountService } from './../../../shared/services/discount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-discount',
  templateUrl: './user-discount.component.html',
  styleUrls: ['./user-discount.component.scss']
})
export class UserDiscountComponent implements OnInit {

  discounts: Discount[] = [];
  constructor(private discountService: DiscountService) { }

  ngOnInit() {
    this.getDiscountByGroup();
  }

  getDiscountByGroup() {
    this.discountService
    .getDiscountJson()
    .subscribe((data: Discount[]) => this.discounts = data);
  }


}
