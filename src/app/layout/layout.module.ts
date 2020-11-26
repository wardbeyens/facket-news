import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';

import { SharedModule } from './../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class LayoutModule {}
