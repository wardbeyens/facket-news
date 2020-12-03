import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Errors } from 'src/app/shared/models/errors.model';

@Component({
  selector: 'app-addjournalist',
  templateUrl: './addjournalist.component.html',
  styleUrls: ['./addjournalist.component.scss'],
})
export class AddjournalistComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup;

  errors: Object = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email: ['Jos@facket.be', Validators.required],
      password: ['user1234', Validators.required],
      username: ['Jos', Validators.required],
      role: ['Journalist', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };
    let credentials = this.authForm.getRawValue();
    console.log(credentials);
    this.userService.createJournalist(credentials).subscribe(
      (data) => {
        // console.log(data);
        this.router.navigateByUrl('/journalists');
      },
      (err) => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}
