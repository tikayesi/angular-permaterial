import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handsonper-material';
  data = 0;

  changeFromParent(): void {
    this.data += 1;
  }

  addData(newData: number){
    this.data = newData;
  }

}
