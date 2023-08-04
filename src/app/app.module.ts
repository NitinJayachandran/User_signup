//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { AppRoutingModule } from './app-routing.module';
import { UserSignupModule } from 'src/app/modules/user-signup/user-signup.module';
import { UserListModule } from 'src/app/modules/user-listings/user-list.module';
import { userIdComponent } from './modules/id-details/components/user-id/user-id.component';
//import { routingComponents } from './app-routing.module';
//import { AddUserModule } from './modules/user-signup/components/add-user/add-user.module';
//import { UserDetailsModule } from 'src/app/modules/user-signup/components/user-details/user-details.module';
//components
import { AppComponent } from './app.component';
//import { AddUserComponent } from 'src/app/modules/user-signup/components/add-user/add-user.component';
//import { UserDetailsComponent } from 'src/app/modules/user-signup/components/user-details/user-details.component';
//forms
import { FormsModule } from '@angular/forms';
//reactive forms
import { ReactiveFormsModule } from '@angular/forms';
//service
import { UserService } from './services/userservice.service';
//reducer
import { userReducer } from './store/reducers/userreducer';
//store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserIdModule } from './modules/id-details/user-id.module';
//import { UserIdComponent } from './modules/id-details/components/user-id/user-id.component';





@NgModule({
  declarations: [
    AppComponent,
    //UserIdComponent,
   
  ],
  imports: [
    //AddUserModule,
    //UserDetailsModule,

    UserIdModule,
    UserSignupModule,
    UserListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
