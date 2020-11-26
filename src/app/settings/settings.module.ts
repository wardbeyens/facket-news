import { SharedModule } from './../shared/shared.module';
import { SettingsComponent } from './settings.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

const settingsRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    {
      path: 'settings',
      component: SettingsComponent,
      // canActivate: [AuthGuard],
    },
  ]
);

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, settingsRouting],
})
export class SettingsModule {}
