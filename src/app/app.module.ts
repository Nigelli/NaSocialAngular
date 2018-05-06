import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
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

import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages.component";
import { UsersComponent } from "./users.component";
import { RegisterComponent } from "./register.component";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";

const routes = [
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
