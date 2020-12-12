import { Discount } from './../../../shared/models/discount';
import { DiscountService } from './../../../shared/services/discount.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-discount',
  templateUrl: './user-discount.component.html',
  styleUrls: ['./user-discount.component.scss']
})
export class UserDiscountComponent implements OnInit {

  discounts: Discount[] = [];
  @Input() discount: Discount;
  constructor(private discountService: DiscountService) { }
  displayedColumns = [
    'Groupe',
    'Réduction'
  ];
  ngOnInit() {
    this.getDiscountByGroup();
  }

  getDiscountByGroup() {
    this.discountService
    .getAllDiscount()
    .subscribe((data: Discount[]) => this.discounts = data);
  }


}
