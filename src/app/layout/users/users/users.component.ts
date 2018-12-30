import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.load();
    this.userService.users$.subscribe(value => {
      console.log(value);
      this.users = value;
    });
  }

  delete(user: User) {
    this.userService.delete(user.id).subscribe(value => {
      this.userService.setUsers(this.users.filter(value1 => value1.id !== user.id));
    }, error1 => {
      console.log(error1);
    });
  }

}
