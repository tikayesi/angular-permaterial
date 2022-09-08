import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
}

public childTitle: string = "child title";

public clickCount: number = 0;

public name: string = "child name";

onCountChanged(count: number): void {
  this.clickCount = count;
}

}
