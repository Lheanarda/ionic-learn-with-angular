import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes:Recipe[];
  constructor(private recipeService:RecipesService , private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes();
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave')
  }

}
