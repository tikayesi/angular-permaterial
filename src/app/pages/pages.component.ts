import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit{
  @Input() parentData: number = 0;
  @Input() nameFromParent: string = '';
  @Output() newItemEvent = new EventEmitter<number>();
  intervalId: any;
  numberChild: number = 0;

  constructor() {
    console.log('Constructor');

  }

  ngOnInit() {

  }

  decrementFromChild(){
    this.newItemEvent.emit(this.numberChild = this.numberChild - 1)
  }

}
