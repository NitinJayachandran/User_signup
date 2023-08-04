import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userIdComponent } from './components/user-id/user-id.component';


@NgModule({
  declarations: [
    userIdComponent
  ],
  imports: [
    CommonModule
    //userIdComponent
  ],
  exports: [
    userIdComponent
  ]
  

})
export class UserIdModule { }
