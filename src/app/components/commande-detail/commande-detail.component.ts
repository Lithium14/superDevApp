import { UsersService } from './../../shared/services/users.service';
import { ProductService } from './../../shared/services/product.service';
import { User } from './../../shared/models/user';
import { Product } from './../../shared/models/product';
import { Commandes } from './../../shared/models/commandes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.scss']
})
export class CommandeDetailComponent implements OnInit {
  constructor(private productService: ProductService, private userService: UsersService) { }


  priceTotalHT: number;
  @Input() commande: Commandes;
  products: Product[];
  users: User[];
  id: number;
  ngOnInit() {
    this.getProduct();
    this.getUser();
  }


  getProduct() {
    this.productService.getProductJson().subscribe((data: Product[]) => this.products = data);
  }

  getUser() {
    this.userService.getUserJson().subscribe((data: User[]) => this.users = data);
  }

  getPriceTotHT() {
    this.priceTotalHT = 0;
    for (const price of this.commande.quotation) {
      this.priceTotalHT += price.quantity;
    }
    return this.priceTotalHT;
  }

  getPriceWithRemise() {

  }

  getPriceWithTVA() {
    let priceTot = this.getPriceTotHT();
    priceTot = priceTot + this.getPriceTotHT() * 0.2;
    return priceTot;

  }


}
