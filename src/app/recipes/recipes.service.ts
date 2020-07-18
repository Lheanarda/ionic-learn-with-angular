import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

   recipes:Recipe[]=[
    {
      id:'R01',
      title:'Burger',
      imageUrl:'https://cdn.vox-cdn.com/thumbor/KP3nfTP3ZgFwZ_EpQsDdwnO7L4I=/0x0:4047x3035/1820x1024/filters:focal(1700x1194:2346x1840):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg',
      ingredients:['French Fries','Meat','Salad']
    },
    {
      id:'R02',
      title:'Milk Shake',
      imageUrl:'https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes1.jpg',
      ingredients:['Milk','Oreo','Cheese']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe=>{
      return recipe.id === recipeId;
    })}
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id !== recipeId
    })
  }
}
