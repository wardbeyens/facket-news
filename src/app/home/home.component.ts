import { TagsService } from './../core/services/tags.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ArticleListConfig } from '../shared/models/article-list-config.model';
import { User } from '../shared/models/user.model';

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
  address: String;
  selectedTag: String;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.address = this.router.url;

    this.route.params.subscribe((params) => {
      if (this.selectedTag != params.tag && this.selectedTag) {
        this.setListTo('all', {
          tag: params.tag,
        });
      }
      this.selectedTag = params.tag;
    });

    this.userService.isAuthenticated.subscribe((authed) => {
      this.isAuthenticated = authed;
    });

    this.tagsService.getAll().subscribe((tags) => {
      this.tags = tags;
      this.tagsLoaded = true;
    });

    if (this.address === '/timeline') {
      this.setListTo('feed');
    } else if (this.address === '/bookmarks') {
      if (!this.isAuthenticated) {
        this.router.navigateByUrl('/auth/login');
      }
      this.userService.currentUser.subscribe((userData: User) => {
        this.listConfig.filters.favorited = userData.username;
      });
    } else if (this.address.startsWith('/search/tag/')) {
      this.setListTo('all', {
        tag: this.selectedTag,
      });
    }
  }

  setListTo(type: string = '', filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/auth/login');
      return;
    }
    this.listConfig = { type: type, filters: filters };
    console.log(this.listConfig);
  }
}
