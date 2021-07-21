import { Component, OnInit } from '@angular/core';

import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipie[] = [
    new Recipie(
      'A Test Recipe',
      'This is simply a test.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
    ),
    new Recipie(
      'A Test Recipe 2',
      'This is simply a test.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
