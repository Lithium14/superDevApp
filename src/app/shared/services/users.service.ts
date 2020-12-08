import { usersMock } from './../../../assets/usersMock.mock';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}



  getUser(): User[] {
    return usersMock;
  }

  createUser(newUser: User) {
    usersMock.push(newUser);
  }

  updateUser() {}


  deleteUser(index) {
    usersMock.splice(index, 1);
    console.log(usersMock[index], 'mock index');
    console.log(usersMock, 'Tableau de mock');
  }
}
