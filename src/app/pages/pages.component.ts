import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements
OnInit,
OnDestroy,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked{
  @Input() parentData: number = 0;
  // @Output() newItemEvent = new EventEmitter<number>();
  id = new Date();
  intervalId: any;

  constructor() {
    console.log('Constructor');

  }

  ngOnInit() {

    console.log('on init');
      this.tick()
  }

  // changeFromChild(){
  //   this.newItemEvent.emit(this.parentData-1)
  // }

  tick(){
    this.intervalId = setInterval(() => {
      this.id = new Date()
    console.log(this.id);
   }, 1000);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('on changes');
  }


  ngDoCheck(): void {
    console.log("Do Check");

  }

  ngAfterContentInit(): void {
    console.log("After content init");

  }

  ngAfterContentChecked(): void {
    console.log('After content checked');

  }

  ngAfterViewInit(): void {
    console.log('After view init');

  }

  ngAfterViewChecked(): void {
    console.log('After view checked');

  }


  ngOnDestroy() {
    console.log('on destroy');

    clearInterval(this.intervalId);
    console.log('Interval cleared.');
  }

}
