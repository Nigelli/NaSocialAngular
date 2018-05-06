import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  messages = [];

  constructor(private http: Http) {}

  registerUser(registerData) {
    this.http
      .post("http://localhost:3000/register", registerData)
      .subscribe(response => {});
  }

  loginUser(loginData) {
    this.http
      .post("http://localhost:3000/login", loginData)
      .subscribe(response => {
        console.log(response);
        localStorage.setItem("token", response.json().token);
      });
  }
}
