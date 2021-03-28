import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService, private counterService: CounterService) {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.setToInactive();
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
}
