import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  currentUser: User;
  isAuthenticated: boolean = false;

  links: Object[] = [
    {
      url: '/',
      icon: 'home',
      title: 'Home',
    },
    {
      url: '/editor',
      icon: 'editor',
      title: 'Editor',
    },
    {
      url: '/timeline',
      icon: 'done_outline',
      title: 'Timeline',
    },
    {
      url: '/popular',
      icon: 'star_rate',
      title: 'Popular',
    },
    {
      url: '/bookmarks',
      icon: 'bookmark_border',
      title: 'Bookmarks',
    },
  ];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe((authed) => {
      this.isAuthenticated = authed;
    });

    this.userService.currentUser.subscribe((userData: User) => {
      this.currentUser = userData;
    });
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
