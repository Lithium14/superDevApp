import { productsMock } from './../../../assets/productsMock.mock';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProduct(): Product[] {
    return productsMock;
  }
}
