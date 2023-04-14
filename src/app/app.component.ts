import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zero-app';
  public incNumbers: number[]=[];
  // constructor() {
  // this.incNumber;
  // }
  onNumberIncremented(number: number) {
    console.log(number);
    this.incNumbers.push(number);
  }
}
