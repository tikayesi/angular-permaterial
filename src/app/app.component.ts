import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anime } from './model/Anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animes : any[] = []
  ngOnInit(): void {
  }

  getAnimes(data: any){
    this.animes.push(data)
    console.log(this.animes);

  }

}
