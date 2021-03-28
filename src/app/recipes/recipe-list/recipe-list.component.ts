import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is 1 simple test', 'https://assets.imgix.net/unsplash/pineneedles.jpg?auto=compress&w=900&h=600&fit=crop'),
    new Recipe('A test Recipe 2', 'This is 2 simple test', 'https://assets.imgix.net/unsplash/transport.jpg?auto=compress&w=900&h=600&fit=crop'),
    new Recipe('A test Recipe 3', 'This is 3 simple test', 'https://assets.imgix.net/unsplash/bridge.jpg?auto=compress&w=900&h=600&fit=crop'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }
}
