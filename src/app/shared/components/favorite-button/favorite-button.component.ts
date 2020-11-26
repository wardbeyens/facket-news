import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input() countLikes: number;
  @Input() isLiked: boolean;
  @Input() isSubmitting: boolean;
  @Output() onToggle = new EventEmitter();
  colorTheme = 'primary';

  toggleFavorite() {
    this.onToggle.emit();
  }

  /* 
  toggleFavoritev2() {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        concatMap((authenticated) => {
          if (!authenticated) {
            this.router.navigateByUrl('/login');
            return of(null);
          }


          return this.articlesService
            .favorite(this.article.slug, this.article.favorited)
            .pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.onToggle.emit(this.article.favorited);
                },
                (err) => (this.isSubmitting = false)
              )
            );

                    if (!this.article.favorited) {
            return this.articlesService.favorite(this.article.slug, true).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.onToggle.emit(true);
                },
                (err) => (this.isSubmitting = false)
              )
            );

          } else {
            return this.articlesService.favorite(this.article.slug, false).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.onToggle.emit(false);
                },
                (err) => (this.isSubmitting = false)
              )
            );
          } 
        })
      )
      .subscribe();
  } 
  */
}
