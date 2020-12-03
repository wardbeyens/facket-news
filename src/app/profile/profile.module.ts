import { ProfileComponent } from './profile.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileResolverService } from './profile-resolver.service';
import { RouterModule } from '@angular/router';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { SharedModule } from '../shared/shared.module';

const profileRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService,
    },
    children: [
      {
        path: '',
        component: ProfileArticlesComponent,
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent,
      },
    ],
  },
]);

@NgModule({
  declarations: [ProfileComponent, ProfileArticlesComponent, ProfileFavoritesComponent],
  imports: [CommonModule, SharedModule, profileRouting],
  providers: [ProfileResolverService],
})
export class ProfileModule {}
