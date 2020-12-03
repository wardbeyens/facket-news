/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddjournalistComponent } from './addjournalist.component';

describe('AddjournalistComponent', () => {
  let component: AddjournalistComponent;
  let fixture: ComponentFixture<AddjournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
