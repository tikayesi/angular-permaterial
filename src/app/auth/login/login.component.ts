import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginStatus = new EventEmitter<string>();
  loginForm: FormGroup = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })


  constructor() { }

  ngOnInit(): void {
  }

  login(params: any){
    if(params.email === 'admin@example.com' && params.password === 'password'){
      this.loginStatus.emit(params.email);
    } else{
      alert('Invalid username or password!')
    }

  }

}
