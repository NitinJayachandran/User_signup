import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from 'src/app/services/userservice.service';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userForm!: FormGroup;
  users!: Observable<User[]>;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [, Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.users = this.userService.getUsers();
  }

  addUser(): void {
    if (this.userForm.valid) {
      const user: User = {
        userId: this.userForm.value.userId,
        name: this.userForm.value.name,
        age: this.userForm.value.age,
        gender: this.userForm.value.gender,
        email: this.userForm.value.email
      };
      this.userService.addUser(user);
      this.userForm.reset();
    }
  }
  /*goToUserDetails(userId: string): void {
    this.router.navigate(['/user-list/details', userId]);
  }*/

  /*goToUserDetails(userId: string): void{
    this.router.navigate(['/user-list/details',userId])
    this.userService. getUserById(userId)
  }*/
  /*goToUserDetails(userId: string): void {
    const user = this.userService.getUserById(userId);
    if (user) {
      this.router.navigate(['/user-list/details', user.userId]);
    }
  }*/
  
  goToUserDetails(): void {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        const userId = user.userId;
        this.router.navigate(['/user-list/details', userId]);
      });
    });
  }
  
  /*

  goToUserDetails(userId: string): void {
    this.router.navigate(['/user-list/details', userId]);
  }*/
  
  
  resetList(): void {
    this.userService.resetList();
  }
}

