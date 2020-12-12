import { CommandesService } from './../../shared/services/commandes.service';
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


  constructor(
    private productService: ProductService,
    private userService: UsersService,
  ) { }


  priceTotalHT: number;
  @Input() commande: Commandes;
  products: Product[];
  users: User[];
  first;
  last;
  idProduct;
  itemProduct;
  itemPrice;


  ngOnInit() {
    this.getProduct();
    this.getUser();
  }

  // Fetch Product
  getProduct() {
    this.productService.getAllProduct().subscribe((data: Product[]) => this.products = data);
  }

  // Fetch User
  getUser() {
    this.userService.getUser().subscribe((data: User[]) => this.users = data);
  }

  // Get Firstname and lastName of User
  getLastAndFirstName() {
    const searchUser =  this.users.findIndex((x) => x.id === this.commande.userId );
    if (searchUser >= 0) {
      this.last = this.users[searchUser]['last-name'];
      this.first = this.users[searchUser]['first-name'];
    }
    return this.last + ' ' + this.first;
  }


  getProductByName() {
    const search = this.products.filter(val => this.commande.quotation.some(role => val.id.includes(role.productId)));
    return search;
  }

  // getPriceTotHT() {
  //   let priceTotal = 0;
  //   let searchItem;
  //   for (let i = 0; i < this.products.length; i++) {
  //     searchItem = this.products.findIndex((x) => x.id === this.commande.quotation[i].productId);
  //     priceTotal += this.commande.quotation[i].quantity * this.products[searchItem].price;
  //     console.log(priceTotal);
  //   }

  //   return priceTotal;

  // }



  // getPriceWithRemise() {

  // }

  // getPriceWithTVA() {
  //   let priceTot = this.getPriceTotHT();
  //   priceTot = priceTot + this.getPriceTotHT() * 0.2;
  //   return priceTot;

  // }


}
