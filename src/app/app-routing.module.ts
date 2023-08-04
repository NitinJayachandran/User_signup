import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from 'src/app/modules/user-listings/components/user-details/user-details.component';
import { AddUserComponent } from './modules/user-signup/components/add-user/add-user.component';
import { userIdComponent } from './modules/id-details/components/user-id/user-id.component';
const routes: Routes = [
  {path:'', redirectTo : '/Signup', pathMatch : 'full'},
  {path: 'Signup',component : AddUserComponent},
  {path: 'user-list',component : UserDetailsComponent},
  { path: 'user-list/details/:id', component: userIdComponent }
  //{path: 'details',component : UserDetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [AddUserComponent, UserDetailsComponent]