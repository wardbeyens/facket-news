import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../core/services/articles.service';
import { ArticleListConfig } from '../shared/models/article-list-config.model';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.runQuery();
  }

  query: ArticleListConfig = new ArticleListConfig();

  loadedArticles: Article[];
  loading = false;
  currentPage: number = 1;

  displayedColumns: string[] = ['createdAt', 'title', 'status'];

  runQuery() {
    this.loading = true;
    this.loadedArticles = [];

    // Create limit and offset filter (if necessary)
    this.query.filters.limit = 99;

    this.articlesService.query(this.query).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.loadedArticles = data.articles;
    });
  }
}
