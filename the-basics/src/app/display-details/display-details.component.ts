import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class DisplayDetailsComponent implements OnInit {
  showDetails = false;
  buttonClicks = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(Date.now());
  }
}
