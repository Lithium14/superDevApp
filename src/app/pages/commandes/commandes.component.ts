import { User } from './../../shared/models/user';
import { Product } from './../../shared/models/product';
import { UsersService } from './../../shared/services/users.service';
import { Commandes } from './../../shared/models/commandes';
import { ProductService } from './../../shared/services/product.service';
import { CommandesService } from './../../shared/services/commandes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {


  Commande: Commandes[];
  products: Product[];
  commandeDetail: Commandes;
  users: User[];
  constructor(private commandesService: CommandesService, private productService: ProductService,
              private userService: UsersService) { }

  ngOnInit() {
    this.getCommandes();
  }

  getCommandes() {
    this.commandesService.getCommandeJson().subscribe((data: Commandes[]) => this.Commande = data);
  }

  getProduct() {
    this.productService.getProductJson().subscribe((data: Product[]) => this.products = data);
  }

  getUser() {
    this.userService.getUserJson().subscribe((data: User[]) => this.users = data);
  }

  onCheckDetails(data: Commandes) {
    this.commandeDetail = data;
  }
}
