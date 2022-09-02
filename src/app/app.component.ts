import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled: boolean = false;
  title = 'Learn Angular';
  arr = [1,2,3]
  data = 0;
  bool = true;
  obj = {traineeName:'Tika', gender: 'Female'}
  showMessage = ''
  name: string = '';
  dataParentName = '';

  numberCount : number = 0;

  ngOnInit() {
    setTimeout(() => {
       this.isDisabled = !this.isDisabled;
    }, 2000);
}

onButtonClick(){
  this.showMessage = 'This message is showed by click event'
}

onKeyPress(event: any) {
  console.log(event);
  this.name = event.target.value;
}

incrementNumber(){
  this.numberCount++;
}

addDataName(){
this.dataParentName = this.name;
}

addDataFromChild(val: number){
this.numberCount = val
}

}
