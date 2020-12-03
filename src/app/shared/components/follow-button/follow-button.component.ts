import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class FollowButtonComponent implements OnInit {
  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<Boolean>();
  isSubmitting = false;

  constructor(private ProfileService: ProfileService, private Router: Router, private UserService: UserService) {}

  ngOnInit() {}

  toggleFollowing() {
    this.isSubmitting = true;
    this.UserService.isAuthenticated.subscribe((authed) => {
      // Not authenticated? Push to login screen
      if (!authed) {
        this.Router.navigateByUrl('/auth/login');
        return;
      }

      // Follow this profile if we aren't already
      if (!this.profile.following) {
        this.ProfileService.follow(this.profile.username).subscribe(
          (data) => {
            this.isSubmitting = false;
            this.onToggle.emit(true);
          },
          (err) => (this.isSubmitting = false)
        );
      } else {
        this.ProfileService.unfollow(this.profile.username).subscribe(
          (data) => {
            this.isSubmitting = false;
            this.onToggle.emit(false);
          },
          (err) => (this.isSubmitting = false)
        );
      }
    });
  }
}
