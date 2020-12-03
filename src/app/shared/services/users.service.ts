import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userSubject = new Subject<any[]>();

  users: Users[] = [
    {
      id: 1,
      firstName: 'toto',
      lastName: 'tata',
      groupe: 'ACDF'
    },
    {
      id: 2,
      firstName: 'dsgsfg',
      lastName: 'tataddddd',
      groupe: 'ACDFdddd'
    },
    {
      id: 3,
      firstName: 'totdddddo',
      lastName: 'tataddffff',
      groupe: 'ACDFffgfgfg'
    },
    {
      id: 4,
      firstName: 'toto12',
      lastName: 'tata1212',
      groupe: 'ACDF1212'
    },
  ];

  constructor(private http: HttpClient) { }

  emitUsers() {
    this.userSubject.next(this.users);
  }

}
