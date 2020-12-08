import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}


  public getUserJson(): Observable<User[]> {
    return this.http.get('../../../assets/users.json');
  }


  public createUser(user: User) {
    this.users.push(user);
   }

  public deleteUser(index) {
    return this.http.delete('../../../assets/users.json', index);

  }

  public updateUser(user: User) {
    this.http.put('../../../assets/users.json', user);
  }

}
