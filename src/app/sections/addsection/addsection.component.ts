import { SectionService } from './../../core/services/section.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsection',
  templateUrl: './addsection.component.html',
  styleUrls: ['./addsection.component.scss'],
})
export class AddsectionComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  sectionForm: FormGroup;

  errors: Object = {};

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private router: Router
  ) {
    this.sectionForm = this.fb.group({
      name: ['Fashion', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };
    let credentials = this.sectionForm.getRawValue();
    console.log(credentials);
    this.sectionService.add(credentials).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/sections');
      },
      (err) => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}
