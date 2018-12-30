import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAddComponent} from './user-add/user-add.component';
import {UserMainComponent} from './user-main/user-main.component';
import {UsersComponent} from './users/users.component';
import {DataTableModule} from 'angular-6-datatable';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, DataTableModule, ReactiveFormsModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule

  ],
  declarations: [UsersComponent, UserAddComponent, UserMainComponent]
})
export class UsersModule {
}
