import { Component } from '@angular/core';
import { User } from '/Users/njayachandran/Documents/angular/signup_redux/src/app/user';
import { ReactiveFormsModule } from '@angular/forms';
import { addUser } from './store/actions/useraction';
import { Store } from '@ngrx/store';
import { UserState } from './store/reducers/userreducer';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Signup'
  
  newUser: User = { name: '', age: 0 ,gender: '',email:'' };

  constructor(private store: Store <UserState>) {}

  addUser(newUser: User): void {
    if (newUser.name && newUser.age) {
      if (newUser.age === 0) {
        alert('Age cannot be 0!');
      } else {
        // Handle the user addition logic or emit an event to the child components
        //console.log('New User:', newUser);
        //this.store.dispatch(addUser(this.newUser));
        this.newUser = { name: '', age: 0,gender: '',email: '' };
      }
    }
  }
}
