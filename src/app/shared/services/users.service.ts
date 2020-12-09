import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'api/users'

  constructor(private httpClient: HttpClient ) {}



  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
    .pipe(
      tap(
        data => console.log('All: ' + JSON.stringify(data))
      )
    );
  }


  getUserById(id: number): Observable<User> {
    const url = `${this.createUser}/${id}`;
    return this.httpClient.get<User>(url);
  }


  createUser(newUser: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, newUser);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl, user)
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.createUser}/${user.id}`;
    return this.httpClient.delete<User>(this.baseUrl);
  }
}
