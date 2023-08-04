/*import {v4 as uuidv4} from 'uuid';
export class User {
    id: UUID;
    name: string | undefined;
    age: number | undefined;
    gender: string | undefined;
    email: string | undefined;

}*/

import { v4 as uuidv4 } from 'uuid';

export class User {
  userId: string;
  name: string | undefined;
  age: number | undefined;
  gender: string | undefined;
  email: string | undefined;

  constructor() {
    this.userId = uuidv4(); // Generate a UUID for the user instance
  }
}
