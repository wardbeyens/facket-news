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

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, homeRouting],
})
export class HomeModule {}
