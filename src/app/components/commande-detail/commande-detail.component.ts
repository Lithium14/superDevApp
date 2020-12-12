import { Discount } from './../../shared/models/discount';
import { DiscountService } from './../../shared/services/discount.service';
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
    private discountService: DiscountService
  ) { }


  priceTotalHT: number;
  @Input() commande: Commandes;
  products: Product[];
  users: User[];
  discounts: Discount[];
  first;
  last;


  ngOnInit() {
    this.getProduct();
    this.getUser();
    this.getDiscount();
  }

  // Fetch Product
  getProduct() {
    this.productService.getAllProduct().subscribe((data: Product[]) => this.products = data);
  }

  // Fetch User
  getUser() {
    this.userService.getUser().subscribe((data: User[]) => this.users = data);
  }

  // Fetch Discount
  getDiscount() {
    this.discountService.getAllDiscount().subscribe((data: Discount[]) => this.discounts = data);
  }

  // Method to find Index User
  findIndexUser(): number {
    const searchUser =  this.users.findIndex((x) => x.id === this.commande.userId );
    return searchUser;
  }

  // Get Firstname and lastName of User
  getLastAndFirstName() {
    if (this.findIndexUser() > -1) {
      this.last = this.users[this.findIndexUser()]['last-name'];
      this.first = this.users[this.findIndexUser()]['first-name'];
    }
    return this.last + ' ' + this.first;
  }


  // Get name product in commandes
  getProductByName() {
    const search = this.products.filter(val => this.commande.quotation.some(role => val.id.includes(role.productId)));
    return search;
  }

  // Get price total HT
  getPriceTotHT() {
    const priceTotHt = this.getProductByName();
    return priceTotHt.reduce((acc, val) => acc += val.price, 0);
  }

  // Get Price With remise per group
  getPriceWithRemise() {
    const priceTot = this.getPriceTotHT();
    let priceWithRemise = 0;
    const findUserInGroup = this.users[this.findIndexUser()].groupe;
    const searchPerCent = this.discounts.filter(x => x.groupe === findUserInGroup);
    priceWithRemise = priceTot - priceTot * (searchPerCent[0]['discount-percent'] / 100);
    return priceWithRemise;
  }

  // Get Price total after tva 20%
  getPriceWithTVA() {
    const priceWithRemise = this.getPriceWithRemise();
    let priceWithTva = 0;
    priceWithTva = priceWithRemise + this.getPriceWithRemise() * 0.2;
    return priceWithTva.toFixed(2);

  }


}
