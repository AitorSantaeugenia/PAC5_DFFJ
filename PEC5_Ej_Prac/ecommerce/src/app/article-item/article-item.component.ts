import { Component,OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Article} from "./model/article"
import {ArticleQuantityChange} from "./model/article-quantity-change"

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {
  @Input() public article!: Article;
  @Output() private ArticleQuantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  title = "article";

  public article_list!: Article[];

  constructor() { }

  ngOnInit(): void {
    this.article_list = [
      {
        id:1,
        name: "Modelo De Máquina De Escribir Retro",
        imageUrl: "./../../assets/images/article-1.png",
        price: 87.59,
        isOnSale: true,
        quantityInCart:0,
        inStock:10,
      },
      {
        id:2,
        name: "Cámara réflex Canon EOS 2000D",
        imageUrl: "./../../assets/images/article-2.png",
        price: 429,
        isOnSale: false,
        quantityInCart:0,
        inStock:0,
      },
      {
        id:3,
        name: "Monitor FHD de 21,5 pulgadas, ThinkVision",
        imageUrl: "./../../assets/images/article-3.png",
        price: 119,
        isOnSale: true,
        quantityInCart:0,
        inStock:5,
      }
    ];
  }

  counter = [0, 0, 0];

  incCounter(articleID: any){
    console.log(this.article_list[0].inStock)
    if(articleID === 1 && this.counter[0] < this.article_list[0].inStock){
      this.counter[0]++;
      this.ArticleQuantityChange.emit({article: this.article_list[1], quantity: this.counter[0]});
    }else if(articleID === 2 && this.counter[1] < this.article_list[1].inStock){
      this.counter[1]++;
      this.ArticleQuantityChange.emit({article: this.article_list[2], quantity: this.counter[1]});
    }else if(articleID === 3 && this.counter[2] < this.article_list[2].inStock){
      this.counter[2]++;
      this.ArticleQuantityChange.emit({article: this.article_list[3], quantity: this.counter[2]});
    }
  } 

  decCounter(articleID: any){
    if(articleID === 1){
      this.counter[0]--;
      this.ArticleQuantityChange.emit({article: this.article_list[1], quantity: this.counter[0]});
    }else if(articleID === 2){
      this.counter[1]--;
      this.ArticleQuantityChange.emit({article: this.article_list[2], quantity: this.counter[1]});
    }else{
      this.counter[2]--;
      this.ArticleQuantityChange.emit({article: this.article_list[3], quantity: this.counter[2]});
    }
  }
}
