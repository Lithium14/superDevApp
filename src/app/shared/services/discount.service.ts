import { discountMock } from './../../../assets/discountMock.mock';
import { Discount } from './../models/discount';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  getAllDiscount(): Discount[] {
    return discountMock;
  }
}
