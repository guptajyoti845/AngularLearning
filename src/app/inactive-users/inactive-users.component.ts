import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  constructor(private userService: UserService, private counterService: CounterService) {
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.setToActive();
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
}
