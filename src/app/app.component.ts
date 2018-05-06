import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar>
      Example app
      <button mat-button routerLink="users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="register">Register</button>
      <button mat-button routerLink="login">Login</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = "my example app";
}