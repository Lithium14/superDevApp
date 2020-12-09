import { Discount } from './../../shared/models/discount';
import { DiscountService } from './../../shared/services/discount.service';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss']
})
export class AdminUserFormComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    public dialogRef: MatDialogRef<AdminUserFormComponent>,
    private discountService: DiscountService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      'first-name': ['', Validators.required],
      'last-name': ['', Validators.required],
      groupe: ['', Validators.required]
    });


  }

  userForm: FormGroup;
  editMode = false;
  libelle = 'Créer';
  getGroupe: Discount[] = [];
  defaultSelected = this.getGroupe[0];



  ngOnInit() {
    this.getGroupeOfDiscount();

    // this.userForm.patchValue({
    //   id: this.data.id,
    //   firstname: this.data['first-name'],
    //   lastname: this.data['last-name'],
    //   groupe: this.data.groupe
    // });
    // if (this.data.id) {
    //   this.libelle = 'Modifier';
    //   this.editMode = false;
    // }
  }


  getGroupeOfDiscount() {
    this.getGroupe = this.discountService.getAllDiscount();
  }

  // onUserFormSubmit(id) {
  //   const newUser: User = this.userForm.value;
  //   if (this.editMode) {
  //     this.userService.updateUser(id, newUser);
  //     console.log('L\'utilisateur a été modifié');
  //   } else {
  //     this.userService.createUser(newUser);

  //   }
  // }

  onReset() {
    this.userForm.reset();
  }

  closeForm() {
    this.dialogRef.close();
  }
}
