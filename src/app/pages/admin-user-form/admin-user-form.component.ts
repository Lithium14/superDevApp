import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss']
})
export class AdminUserFormComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private userService: UsersService, public dialogRef: MatDialogRef<AdminUserFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
               ) {
                this.userForm = this.formBuilder.group({
                  firstname: ['', Validators.required],
                  lastname: ['', Validators.required],
                  group: ['', Validators.required]
                });
               }

  userForm: FormGroup;
  users: User[] = [];
  selectedValue: string;
  editMode = false;
  indexToRemove;
  indexToUpdate;

  ngOnInit() {

    this.getGroupOfUser();
  }

  getGroupOfUser() {
    this.userService.getUserJson().subscribe((data: User[]) => this.users = data);
  }


  onUserFormSubmit() {
    const newUser: User = this.userForm.value;
    if (this.editMode) {
      this.userService.updateUser(newUser, this.indexToUpdate);
    } else {
      this.userService.createUser(newUser);
    }
  }

  onReset() {
    this.userForm.reset();
  }

  closeForm() {
    this.dialogRef.close();
  }
}
