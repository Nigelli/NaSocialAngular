import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  private path = 'http://localhost:3000/auth'
  messages = [];

  constructor(private http: Http) {}

  registerUser(registerData) {
    this.http
      .post(`${this.path}/register`, registerData)
      .subscribe(response => {});
  }

  loginUser(loginData) {
    this.http
      .post(`${this.path}/login`, loginData)
      .subscribe(response => {
        console.log(response);
        localStorage.setItem("token", response.json().token);
      });
  }
}
