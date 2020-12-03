import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private httpClient: HttpClient) { }

  getDiscountJson() {
    return this.httpClient.get('../../../assets/discount.json');
  }
}
