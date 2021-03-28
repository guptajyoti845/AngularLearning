import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [new Ingredient('Apple', 5),
    new Ingredient('Orange', 510)];

  getIngredients(){
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  constructor() {
  }


  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
