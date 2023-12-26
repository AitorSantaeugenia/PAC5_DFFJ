import { Component } from '@angular/core';
import { Article } from '../model/article.model';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})

export class ArticleNewReactiveComponent {
  public submitedForm:boolean = false;
  public newArticle!:Article;

  public formArticle!: FormGroup;

  constructor(private fb:FormBuilder) {  
    this.createForm();
  }

  createForm(){
    this.formArticle = this.fb.group({
      name: ['', [Validators.required,this.NameArticleValidator()]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?/[a-zA-Z0-9_\-]+\.[a-zA-Z]+$')]],
      isOnSale: false
    });

  }

  NameArticleValidator():ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const nombreArticulo = control.value.toLowerCase();

      const nombresProhibidos=['prueba','test','mock','fake'];
      
      if (!nombresProhibidos.includes(nombreArticulo)){
        return null;
      }
      else{
        return {NameArticleValidator:true}
      }
    }
  }

  crearArticulo(){
    if (this.formArticle.invalid) {
      this.submitedForm = true; 
    } else {
          this.newArticle = this.formArticle.value;
          console.log('Artículo creado', this.newArticle);
    }
  }
}



  