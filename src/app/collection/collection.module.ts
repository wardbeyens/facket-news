import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { RouterModule } from '@angular/router';

const collectionRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    {
      path: 'collection',
      component: CollectionComponent,
      // canActivate: [AuthGuard],
    },
  ]
);

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, SharedModule, collectionRouting],
})
export class CollectionModule {}
