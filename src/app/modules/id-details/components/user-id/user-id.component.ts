/*import { Component, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-id',
  template: `
    <div>
      <h2>User Details</h2>
      <p>ID: {{ user?.id }}</p>
      <p>Name: {{ user?.name }}</p>
    </div>
  `,
  styleUrls: ['./user-id.component.css']
})
export class userIdComponent {
  @Input() user: User | undefined;
}*/


import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice.service';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class userIdComponent implements OnInit {
  users!: Observable<User[]>;


  constructor(private userService: UserService,private router: Router) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  /*goToUserDetails(userId: string): void {
    this.router.navigate(['/user-list/details', userId]);
  }*/
}











