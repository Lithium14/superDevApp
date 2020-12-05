import { Commandes } from './../../shared/models/commandes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-commande-card',
  templateUrl: './commande-card.component.html',
  styleUrls: ['./commande-card.component.scss']
})
export class CommandeCardComponent implements OnInit {

  commande: Commandes;
  @Input() commandes: Commandes[];
  @Output() clickDetail = new EventEmitter<Commandes>();
  constructor() { }

  ngOnInit() {
  }

  checkDetails(data: Commandes) {
    this.clickDetail.emit(data);
  }

}
