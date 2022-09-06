import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;
  email: string = '';
  birthday: Date = new Date('1995-01-01')

  ngOnInit() {
}

setLoginComponent(event: string){
  this.email = event;
  this.isLogin = true;
}

logout(){
  this.isLogin = false;
}

}
