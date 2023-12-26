import { Component } from '@angular/core';
import { Article } from '../model/article.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  
  public submitedForm:boolean = false;
  public newArticle!:Article;
  
  constructor() {  }

  crearArticulo(articuloForm:NgForm)  {
    if (articuloForm.invalid) {
      this.submitedForm = true;
    } else {
      this.newArticle = articuloForm.value.articulo;
      
      if (!this.newArticle.isOnSale){
        this.newArticle.isOnSale=false;
      }
      console.log('Artículo creado', this.newArticle);
    }
  }
}