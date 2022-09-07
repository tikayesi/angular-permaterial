import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: any[] = [{
    id : '001',
    todo : 'study',
    description : 'learn programming'
  },{
    id : '001',
    todo : 'eat',
    description : 'lunch'
  }];

  getTodos(): any{
    return this.todos;
  }


}
