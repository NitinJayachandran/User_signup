import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { UserDetailsComponent } from 'src/app/modules/user-signup/components/user-details/user-details.component';
import { AddUserComponent } from 'src/app/modules/user-signup/components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UserIdComponent } from '../id-details/components/user-id/user-id.component';



@NgModule({
  declarations: [ 
    //UserDetailsComponent
    AddUserComponent
    //UserIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //UserDetailsComponent
    AddUserComponent
  ]
})
export class UserSignupModule { }
