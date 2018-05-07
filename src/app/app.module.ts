import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages.component";
import { UsersComponent } from "./users.component";
import { RegisterComponent } from "./register.component";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { PostComponent } from "./post.component";
import { AuthInteceptorService } from "./authintercepter.service";

const routes = [
  { path: "", component: PostComponent },  
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent },
  { path: "profile/:id", component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService, { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInteceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
