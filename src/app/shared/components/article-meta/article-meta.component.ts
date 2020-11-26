import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss'],
})
export class ArticleMetaComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit(): void {}
}
