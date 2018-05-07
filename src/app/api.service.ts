import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable()
export class ApiService {
  private path = environment.path;
  messages = [];
  users = [];

  constructor(private http: HttpClient) {}

  getMessages(userId) {
    this.http.get<any>(`${this.path}/posts/${userId}`).subscribe(response => {
      this.messages = response;
    });
  }

  postMessage(message) {
    this.http.post(`${this.path}/post`, message).subscribe(response => {
      
    });
  }

  getUsers() {
    this.http.get<any>(`${this.path}/users`).subscribe(response => {
      this.users = response;
    });
  }

  getProfile(id) {
    return this.http.get(`${this.path}/profile/${id}`);
  }
}
