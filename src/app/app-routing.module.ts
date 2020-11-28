import { ContentComponent } from './layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./article/article.module').then((m) => m.ArticleModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./editor/editor.module').then((m) => m.EditorModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./collection/collection.module').then(
            (m) => m.CollectionModule
          ),
      },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule),
      // },
      // {
      //   path: 'article',
      //   loadChildren: () => import('./modules/article/article.module').then((m) => m.ArticleModule),
      // },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
