import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit, DoCheck {

  @Input() animesFromParent: any[] = [];
  animes: any[] = [];
  animeShow: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(this.animesFromParent.length < 3){
      this.animeShow = [...this.animesFromParent]
    }
  }

  loadMore(): void {
    if(this.animesFromParent.length >= 3){
    this.loading = true;
    setTimeout(() => {
      this.animeShow = [...this.animesFromParent]
      this.loading = false
    }, 2000)
  }
  }

}
