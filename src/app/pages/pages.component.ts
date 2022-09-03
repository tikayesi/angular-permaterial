import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit{
  @Input() emailFromParent: string = '';
  @Output() isLogin = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  logout(){
    this.isLogin.emit();
  }

}
