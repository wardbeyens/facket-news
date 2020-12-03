import { AdminGuard } from './../core/guards/admin.guard';
import { AddsectionComponent } from './addsection/addsection.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SectionResolverService } from './section-resolver.service';

const sectionsRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    {
      path: 'sections/edit/:name',
      component: AddsectionComponent,
      canActivate: [AdminGuard],
      resolve: {
        article: SectionResolverService,
      },
    },
    {
      path: 'sections/add',
      component: AddsectionComponent,
      canActivate: [AdminGuard],
    },
    {
      path: 'sections',
      component: SectionsComponent,
      canActivate: [AdminGuard],
    },
  ]
);

@NgModule({
  declarations: [SectionsComponent, AddsectionComponent],
  imports: [CommonModule, SharedModule, sectionsRouting],
})
export class SectionsModule {}
