import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  

  recipe:Recipe;
  constructor(private route:ActivatedRoute, private recipeService:RecipesService, private router:Router, private alertController:AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe =  this.recipeService.getRecipe(recipeId);
    })
  }

  onDeleteRecipe(){
    this.alertController.create({
      header:'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Delete',
        handler: ()=>{
          this.recipeService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recipes'])
        }
      }
    ]
    }).then(alert=>{
      alert.present();
    })
    
  }

}
