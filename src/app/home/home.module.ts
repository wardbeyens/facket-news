import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeAuthResolverService } from './home-auth-resolver.service';

const homeRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolverService,
    },
  },
]);

const timelineRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    // redirect to if niet ingelogd guard naar popular
    { path: '', redirectTo: 'popular', pathMatch: 'full' }, // redirect to
    {
      path: 'timeline',
      component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolverService,
      },
    },
    {
      path: 'search/tag/:tag',
      component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolverService,
      },
    },
    {
      path: 'popular',
      component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolverService,
      },
    },
    {
      path: 'bookmarks',
      component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolverService,
      },
    },
    {
      path: 'thisismine',
      component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolverService,
      },
    },
  ]
);

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, timelineRouting],
})
export class HomeModule {}
