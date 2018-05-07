import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable()
export class AuthService {
  private path = environment.path + '/auth';
  messages = [];

  private TOKEN_KEY = 'token';

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(registerData) {
    this.http
      .post<any>(`${this.path}/register`, registerData)
      .subscribe(response => {
        this.saveToken(response.token);
      });
  }

  loginUser(loginData) {
    this.http
      .post<any>(`${this.path}/login`, loginData)
      .subscribe(response => {
        this.saveToken(response.token);
      });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
