import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient ) {}

  private baseUrl = 'api/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  user: User;

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed : ${error.message}`);

      return of(result as T);
    };
  }



  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
    .pipe(
      tap(
        _ => this.log('fetch user')
      ),
      catchError(this.handleError(`get Pokemons`, []))
    );
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user, this.httpOptions)
    .pipe(
      tap(
        (newUser: User) => this.log(`added user w/ id=${newUser.id}`) ),
        catchError(this.handleError<User>('User add')
      )
    );
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl, user, this.httpOptions)
    .pipe(
      tap(
        _ => this.log(`updated user id=${user.id}`)
      )
    );
  }

  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user.id;
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<User>(this.baseUrl, this.httpOptions).pipe(
      tap(
        _ => this.log(`deleted user id=${id}`)
      ),
      catchError(this.handleError<User>('deleted User'))
    );
  }
}
