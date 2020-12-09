import { Observable } from 'rxjs';
import { Discount } from './../models/discount';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private baseUrl = 'api/discounts'

  constructor(private httpClient: HttpClient) { }

  getAllDiscount(): Observable<Discount[]> {
    return this.httpClient.get<Discount[]>(this.baseUrl)
    .pipe(
      tap(
        data => console.log('All: ' + JSON.stringify(data))
      )
    );
  }
}
