import { User } from './../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    });
    // Optional: subscribe to changes on the form
    this.settingsForm.valueChanges.subscribe((values) =>
      this.updateUser(values)
    );
  }

  ngOnInit(): void {
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;

    this.updateUser(this.settingsForm.value);

    this.userService.update(this.user).subscribe(
      (updatedUser) =>
        this.router.navigateByUrl('/profile/' + updatedUser.username),
      (err) => {
        (this.errors = err), (this.isSubmitting = false);
      }
    );
  }

  updateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }
}
