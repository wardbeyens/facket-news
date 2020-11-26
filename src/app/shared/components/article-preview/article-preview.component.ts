import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;
  isSubmitting = false;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {}

  onToggleFavorite() {
    this.isSubmitting = true;
    this.articlesService
      .favorite(this.article.slug, !this.article.favorited)
      .subscribe((article) => {
        this.article = article;
        this.isSubmitting = false;
      });
  }
}
