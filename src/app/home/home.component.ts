import { TagsService } from './../core/services/tags.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ArticleListConfig } from '../shared/models/article-list-config.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  listConfig: ArticleListConfig = new ArticleListConfig();
  tags: string[] = [];
  tagsLoaded: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe((authed) => {
      this.isAuthenticated = authed;

      // if (authed) {
      //   this.setListTo('feed');
      // } else {
      //   this.setListTo('all');
      // }

      this.setListTo('all');
    });

    this.tagsService.getAll().subscribe((tags) => {
      this.tags = tags;
      this.tagsLoaded = true;
    });
  }

  setListTo(type: string = '', filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/auth/login');
      return;
    }

    this.listConfig = { type: type, filters: filters };
  }
}
