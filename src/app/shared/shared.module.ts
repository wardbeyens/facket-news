import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleMetaComponent } from './components/article-meta/article-meta.component';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatRadioModule } from '@angular/material/radio';

import { MatSelectModule } from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatMenuModule } from '@angular/material/menu';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';

import { MatStepperModule } from '@angular/material/stepper';

import { MatTabsModule } from '@angular/material/tabs';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatChipsModule } from '@angular/material/chips';

import { MatIconModule } from '@angular/material/icon';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatDialogModule } from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';

import { MatPaginatorModule } from '@angular/material/paginator';

// import {​​ LikeButtonComponent }​​ from './components/like-button/like-button.component';

// import {​​ MatCarouselModule }​​ from 'ng-mat-carousel';

// import {​​ BackButtonComponent }​​ from './components/back-button/back-button.component';;

@NgModule({
  declarations: [
    ListErrorsComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ListErrorsComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    // LikeButtonComponent,

    // BackButtonComponent,

    // MatCarouselModule,
  ],
})
export class SharedModule {}
