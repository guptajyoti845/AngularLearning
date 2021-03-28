import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is 1 simple test', 'https://assets.imgix.net/unsplash/pineneedles.jpg?auto=compress&w=900&h=600&fit=crop', [
      new Ingredient('Meat', 1),
      new Ingredient('French fries', 2),
      new Ingredient('Burger', 3),
    ]),
    new Recipe('A test Recipe 2', 'This is 2 simple test', 'https://assets.imgix.net/unsplash/transport.jpg?auto=compress&w=900&h=600&fit=crop', [
      new Ingredient('Buns', 11),
      new Ingredient('French fries', 22),
      new Ingredient('Meat', 35),
    ]),
    new Recipe('A test Recipe 3', 'This is 3 simple test', 'https://assets.imgix.net/unsplash/bridge.jpg?auto=compress&w=900&h=600&fit=crop', [
      new Ingredient('Meat', 19),
      new Ingredient('Buns', 17),
      new Ingredient('Buns', 14),
      new Ingredient('Burger', 30),
    ]),
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListService) {
  }


  addIngredientstoShopping(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
