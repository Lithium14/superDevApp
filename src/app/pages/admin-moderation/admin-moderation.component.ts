import { Discount } from './../../shared/models/discount';
import { User } from '../../shared/models/user';

import { DiscountService } from './../../shared/services/discount.service';
import { UsersService } from 'src/app/shared/services/users.service';

import { AdminUserFormComponent } from './../admin-user-form/admin-user-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-moderation',
  templateUrl: './admin-moderation.component.html',
  styleUrls: ['./admin-moderation.component.scss']
})
export class AdminModerationComponent implements OnInit {

  @Input() user: User;
  @Input() discount: Discount;
  users: User[] = [];
  discounts: Discount[] = [];

  constructor(
    private userService: UsersService,
    private discountService: DiscountService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AdminUserFormComponent>,
  ) { }

  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'groupe',
    'delete',
    'edit'
  ];


  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUser().subscribe( users => {
      this.users = users;
    });
  }

  showModalForm() {
    const dialogRef = this.dialog.open(AdminUserFormComponent, {
        width: '800px',
        height: '400px',
    });
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }


  deleteUser(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  editUser(userObject) {
    const dialogRef = this.dialog.open(AdminUserFormComponent, {
      data: userObject,
      width: '800px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        const foundIndex = this.users.findIndex((w) => w.id === userObject.id);
        this.users.splice(foundIndex, 1, userObject);
        this.getUsers();
      }
    });
  }

}
