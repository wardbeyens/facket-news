import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ContentComponent } from './layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalistGuard } from './core/guards/journalist.guard';

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
        canActivate: [AuthGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./editor/editor.module').then((m) => m.EditorModule),
        canActivate: [JournalistGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./collection/collection.module').then(
            (m) => m.CollectionModule
          ),
        canActivate: [AdminGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./journalists/journalists.module').then(
            (m) => m.JournalistsModule
          ),
        canActivate: [AdminGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('./sections/sections.module').then((m) => m.SectionsModule),
        canActivate: [AdminGuard],
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
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
