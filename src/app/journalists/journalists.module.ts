import { AddjournalistComponent } from './addjournalist/addjournalist.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistsComponent } from './journalists.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const journalistsRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    {
      path: 'journalists/add',
      component: AddjournalistComponent,
      // canActivate: [AuthGuard],
    },
    {
      path: 'journalists',
      component: JournalistsComponent,
      // canActivate: [AuthGuard],
    },
  ]
);

@NgModule({
  declarations: [JournalistsComponent, AddjournalistComponent],
  imports: [CommonModule, SharedModule, journalistsRouting],
})
export class JournalistsModule {}
