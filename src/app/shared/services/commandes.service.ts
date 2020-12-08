import { Commandes } from './../models/commandes';
import { commandeMock } from './../../../assets/commandeMock.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor() { }

  public getAllCommande(): Commandes[] {
    return commandeMock;
  }
}
