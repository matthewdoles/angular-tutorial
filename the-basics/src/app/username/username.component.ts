import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  allowCreate = false;
  enteredUsername = '';
  username = '';

  constructor() {}

  ngOnInit(): void {}

  onCreateUsername() {
    this.username = this.enteredUsername;
  }

  onUpdateUsername(event: any) {
    const value = (<HTMLInputElement>event.target).value;
    this.enteredUsername = value;
    if (value.length > 0) {
      return (this.allowCreate = true);
    }
    this.allowCreate = false;
  }
}
