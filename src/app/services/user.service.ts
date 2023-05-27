import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | undefined;

  constructor() { }


  setUser(user: User) {
    this.user = user;
  }
  
  getUser(): User | undefined {
    return this.user;
  }
}
