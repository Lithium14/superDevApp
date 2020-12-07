import { Commandes } from './../../shared/models/commandes';
import { CommandesService } from './../../shared/services/commandes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  commande: Commandes[];
  commandeDetail: Commandes;
  constructor(private commandesService: CommandesService) { }

  ngOnInit() {
    this.getCommandes();
  }

  getCommandes() {
    this.commandesService.getCommandeJson().subscribe((data: Commandes[]) => {
     this.commande = data;
    });
  }

  onCheckDetails(data: any) {
    this.commandeDetail = data;
  }


}
