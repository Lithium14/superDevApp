import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userSubject = new Subject<any[]>();
  users: User[];

  constructor(private http: HttpClient) {}

  public getUserJson(): Observable<any> {
    return this.http.get('../../../assets/users.json');
  }


  createUser(user: User) {
    this.users.push(user);
   }

  public deleteUser(index) {
    this.users.splice(index, 1);

  }

  public updateUser(user: User, index) {
    this.users[index] = user;
    }

}
