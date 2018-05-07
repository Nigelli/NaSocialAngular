import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "./api.service";

@Component({
  selector: "messages",
  template: `<div *ngFor="let message of apiService.messages">
                <mat-card>{{message.message}}</mat-card>
            </div>`
})
export class MessagesComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var userId = this.route.snapshot.params.id;
    this.apiService.getMessages(userId);
  }
}
