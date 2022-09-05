import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {

  animes: any[] = [];

  animeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    cover: new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  form(property: string): FormGroup{
    return this.animeForm.get(property) as FormGroup;
  }

  submitData(data: any) {
    this.animes.push(data);
  }


}
