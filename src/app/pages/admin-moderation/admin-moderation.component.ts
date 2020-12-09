import { usersMock } from './../../../assets/usersMock.mock';

import { AdminUserFormComponent } from './../admin-user-form/admin-user-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../shared/models/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-moderation',
  templateUrl: './admin-moderation.component.html',
  styleUrls: ['./admin-moderation.component.scss']
})
export class AdminModerationComponent implements OnInit {

  @Input() user: User;
  users: User[] = [];

  constructor(
    private userService: UsersService,
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
    })
  }

  showModalForm() {
    const dialogRef = this.dialog.open(AdminUserFormComponent, {
        width: '800px',
        height: '400px',
    });
    dialogRef.afterClosed().subscribe(() => this.userService.getUser());
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  editUser(userObject) {
    const index = this.users.findIndex((w) => w.id === userObject.idUser);
    this.users[index] = userObject;
    const dialogRef = this.dialog.open(AdminUserFormComponent, {
      data: userObject,
      width: '800px',
      height: '400px',
    });
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe(() => this.userService.getUser());
  }

}
