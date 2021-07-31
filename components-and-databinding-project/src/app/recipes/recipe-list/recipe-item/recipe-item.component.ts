import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipies.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipie;

  constructor() {}

  ngOnInit(): void {}
}
