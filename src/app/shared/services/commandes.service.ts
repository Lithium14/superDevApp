import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private httpClient: HttpClient) { }

  public getCommandeJson() {
    return this.httpClient.get('../../../assets/commande.json');
  }
}
