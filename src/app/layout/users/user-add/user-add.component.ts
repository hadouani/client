import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  users: User[] = [];
  etat = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(value => {
      this.users = value;
    });
  }

  onSubmit() {
    this.userService.add(this.userForm.value).subscribe(value => {
      this.users.unshift(value);
      this.userService.setUsers(this.users);

      this.userForm.controls['name'].setValue('');
      this.userForm.controls['email'].setValue('');
    }, error1 => {
    });
  }

  change() {
    this.etat = !this.etat;
    //this.add = true;
   // this.edit = false;
  }


}
