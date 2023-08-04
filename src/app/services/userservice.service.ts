import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser, resetList } from '../store/actions/useraction';
import { User } from 'src/app/user';
import { UserState } from '../store/reducers/userreducer'; // Assuming you have defined AppState interface in your store
import { selectUsers } from '../store/selector/userselector';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*getUserById(userId: string): User | undefined {
    throw new Error('Method not implemented.');
  }*/
  users : User[] = []
  constructor(private store: Store<UserState>) {}

  /*getUsers(): User[] {
    let users: User[] = [];
    this.store.select(selectUsers).subscribe(userList => users = userList); // Selecting users from the store
    return users;
  }*/
  getUserById(id: string): User | undefined {
    return this.users.find(user => user.userId === id);
  }

  getUsers(): Observable<User[]> {
    return this.store.select(selectUsers);
  }

  addUser(user: User): void {
    this.store.dispatch(addUser({ user }));
  }

  resetList(): void {
    this.store.dispatch(resetList());
  }
}
