import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { Users } from '../../shared/models/users';

@Component({
  selector: 'app-admin-moderation',
  templateUrl: './admin-moderation.component.html',
  styleUrls: ['./admin-moderation.component.scss']
})
export class AdminModerationComponent implements OnInit {

  users: Users[] = [];
  usersSubscription: Subscription;
  constructor(private userService: UsersService) { }

  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'groupe',
];


  ngOnInit() {

    this.usersSubscription = this.userService.userSubject.subscribe((data: Users[]) => {
      this.users = data;
    });

    this.userService.emitUsers();
  }


  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
