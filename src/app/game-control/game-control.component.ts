import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() numberIncremented = new EventEmitter<number>();
  cancelIncrement:any;
  // constructor() { 
  //   cancelIncrement:any;
  // }

onStartGame() {
  console.log('Game started');
  let number:number = 0;
  // console.log('above setInterval',this);
  
  this.cancelIncrement= setInterval(() => {
    this.numberIncremented.emit(number);
    // console.log(this);
    
    number++;
  }, 1000);

}
onStopGame() {
  console.log('Game stopped');
  clearInterval(this.cancelIncrement);
}
}
