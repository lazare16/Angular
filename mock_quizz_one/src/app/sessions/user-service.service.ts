import { Injectable } from '@angular/core';
import { User } from '../interfaces/Users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Users: User[] = [
    {
      Id: 1,
      Username: 'Lazare',
      Email: 'LazareGogoladze@gmail.com',
      RegistrationTime: new Date(),
      LastLogin: new Date(),
      status: 'Confirmed'
    },
    {
      Id: 2,
      Username: 'keso',
      Email: 'Keso12@gmail.com',
      RegistrationTime: new Date(),
      LastLogin: new Date(),
      status: 'Blocked'
    }
  ]

  getUsers(): User[] {
    return this.Users
  }
  constructor() { }
}
