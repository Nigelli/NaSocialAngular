import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiService {
  messages = [];
  users = [];

  constructor(private http: Http) {}

  getMessages() {
    this.http.get("http://localhost:3000/posts").subscribe(response => {
      this.messages = response.json();
    });
  }

  getUsers() {
    this.http.get("http://localhost:3000/users").subscribe(response => {
      this.users = response.json();
    });
  }

  getProfile(id) {
    return this.http.get("http://localhost:3000/profile/" + id);
  }
}
