import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { EditorComponent } from './editor.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableArticleResolverService } from './editable-article-resolver.service';
import { JournalistGuard } from '../core/guards/journalist.guard';

const editorRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [JournalistGuard],
  },
  {
    path: 'editor/:slug',
    component: EditorComponent,
    canActivate: [JournalistGuard],
    resolve: {
      article: EditableArticleResolverService,
    },
  },
]);

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule, SharedModule, editorRouting],
})
export class EditorModule {}
