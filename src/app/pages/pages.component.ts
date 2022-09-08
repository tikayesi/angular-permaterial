import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit{

  constructor() {

  }

  ngOnInit() {

  }

  private _title: string = '';

  @Input()
  public set title(title: string){
    this._title = title;
  }
  public get title() {
    return this._title;
  }


  public clickCount: number = 0;

  @Output()
  onChanged = new EventEmitter<number>();

  countChange(count: number) {
    count++
    this.clickCount = count;
    this.onChanged.emit( this.clickCount );
  }

  @Input()
  public childName: string =""; //TwoWayBinding for main component

  @Output() childNameChange = new EventEmitter<string>();
  nameChange(name: string){
    this.childNameChange.emit(name);
  }


}
