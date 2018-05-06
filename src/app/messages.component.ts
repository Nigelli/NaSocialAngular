import { Component } from "@angular/core";

import { ApiService } from "./api.service";

@Component({
  selector: "messages",
  template: `<div *ngFor="let message of apiService.messages">
                <mat-card>{{message.message}}</mat-card>
            </div>`
})
export class MessagesComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getMessages();
  }
}
