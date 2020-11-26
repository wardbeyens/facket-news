import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const authRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    // canActivate: [NoAuthGuard],
  },
  {
    path: 'register',
    component: AuthComponent,
  },
]);

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    authRouting,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
