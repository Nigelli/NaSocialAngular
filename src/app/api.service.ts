import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiService {
  private path = 'http://localhost:3000'
  messages = [];
  users = [];

  constructor(private http: Http) {}

  getMessages(userId) {
    this.http.get(`${this.path}/posts/${userId}`).subscribe(response => {
      this.messages = response.json();
    });
  }

  postMessage(message) {
    this.http.post(`${this.path}/post`, message).subscribe(response => {
      
    });
  }

  getUsers() {
    this.http.get(`${this.path}/users`).subscribe(response => {
      this.users = response.json();
    });
  }

  getProfile(id) {
    return this.http.get(`${this.path}/profile/${id}`);
  }
}
