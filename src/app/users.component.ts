import { Component } from "@angular/core";

import { ApiService } from "./api.service";

@Component({
  selector: "users",
  template: `<div *ngFor="let user of apiService.users">
                <mat-card [routerLink]="['/profile', user._id]" style="cursor:pointer;">{{user.name}}</mat-card>
            </div>`
})
export class UsersComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getUsers();
  }
}
