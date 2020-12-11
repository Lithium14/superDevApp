import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'api/products'
  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl)
    .pipe(
      tap(
        _ => console.log('Fetched Product')
      )
    );
  }
}
