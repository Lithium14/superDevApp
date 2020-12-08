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
  constructor(private productService: ProductService, private userService: UsersService, private cS: CommandesService) { }


  priceTotalHT: number;
  commandes: Commandes[] = [];
  @Input() commande: Commandes;
  products: Product[];
  users: User[];
  searchQuantity;
  first;
  last;
  idProduct;
  itemProduct;
  itemPrice;
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

  getLastAndFirstName() {
    const searchUser =  this.users.findIndex((x) => x.id === this.commande.userId );
    if (searchUser >= 0) {
      this.last = this.users[searchUser]['last-name'];
      this.first = this.users[searchUser]['first-name'];
    }
    return this.last + ' ' + this.first;
  }

  getPriceTotHT() {
    let priceTotal = 0;
    let searchItem;
    for (let i = 0; i < this.products.length; i++) {
      searchItem = this.products.findIndex((x) => x.id === this.commande.quotation[i].productId);
      priceTotal += this.commande.quotation[i].quantity * this.products[searchItem].price;
      console.log(priceTotal);
    }

    return priceTotal;

  }

  getProductByName() {
    let searchPrice;
    for (let i = 0; i < this.products.length; i++) {
      searchPrice = this.products.findIndex((x) => x.id === this.commande.quotation[i].productId);

      this.idProduct = this.products[searchPrice].id;
      this.itemProduct = this.products[searchPrice].item;
      this.itemPrice = this.products[searchPrice].price;
      return 'Référence : ' + this.idProduct + '\nNom du produit : '
      + this.itemProduct + '\n ' + ' Prix : ' + this.itemPrice + ' Quantité : ' + this.commande.quotation[i].quantity;
    }

  }

  // getPriceWithRemise() {

  // }

  // getPriceWithTVA() {
  //   let priceTot = this.getPriceTotHT();
  //   priceTot = priceTot + this.getPriceTotHT() * 0.2;
  //   return priceTot;

  // }


}
