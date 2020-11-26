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

  toggleFavorite() {
    this.onToggle.emit();
  }
}
