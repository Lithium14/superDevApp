import { Commandes } from './../models/commandes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  private baseUrl = 'api/commandes'
  constructor(private httpClient: HttpClient) { }

  public getAllCommande(): Observable<Commandes[]> {
    return this.httpClient.get<Commandes[]>(this.baseUrl)
    .pipe(
      tap(
        data => console.log('fetch commandes')
      )
    );
  }
}
