import { Component } from '@angular/core';
import { UserServiceService } from '../sessions/user-service.service';
import { User } from '../interfaces/Users.interface';
import { NgFor, NgStyle } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  Users: User[];
  constructor(userService: UserServiceService) {
    this.Users = userService.getUsers();
  }
}
