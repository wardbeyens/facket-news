import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit(): void {}
}
