import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RouterModule } from '@angular/router';

const customRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: 'plzendthis',
    component: OverviewComponent,
    // canActivate: [AuthGuard],
  },
]);

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, SharedModule, customRouting],
})
export class OverviewModule {}
