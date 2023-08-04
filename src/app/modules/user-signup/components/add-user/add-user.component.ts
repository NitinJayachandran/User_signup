import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from '../../../../services/userservice.service';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  //@Input() newUser: User = { name: '', age: 0, gender: '', email: '' };
  //@Output() addUserEvent = new EventEmitter<{user : User}>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [ , Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      const user: User = {
        userId: uuidv4(),
        name: this.userForm.value.name,
        age: this.userForm.value.age,
        gender: this.userForm.value.gender,
        email: this.userForm.value.email,
        

      };
      this.userService.addUser(user);
      //this.addUserEvent.emit(user);
      this.userForm.reset();
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnterKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.userForm.valid) {
      this.addUser();
    }
  }
}
