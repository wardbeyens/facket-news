import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from './../shared/models/article.model';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { ArticleListConfig } from '../shared/models/article-list-config.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['createdAt', 'title', 'status'];
  data: Article[] = [];
  // query opmaak shit
  limit = 2;
  query: ArticleListConfig = new ArticleListConfig();
  // articlesCount total
  resultsLength = 0;
  // data aan het laden
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.query.filters.limit = this.limit;
    this.runQuery(this.query);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      // .pipe(tap((t) => console.log(t)))
      .subscribe((data) => {
        this.query.filters.field = this.sort.active;
        this.query.filters.order = this.sort.direction;
        this.query.filters.limit = this.limit;
        this.query.filters.offset = this.limit * this.paginator.pageIndex;
        console.log(this.query.filters);
        this.runQuery(this.query);
      });
  }

  runQuery(query) {
    console.log(query);
    this.isLoadingResults = true;
    this.articlesService.tablequery(query).subscribe((data) => {
      console.log(data);
      this.isLoadingResults = false;
      this.data = data.articles;
      this.resultsLength = data.articlesCount;
    });
  }
}
