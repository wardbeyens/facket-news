import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';
import { ArticleResolverService } from './article-resolver.service';
import { MarkdownPipe } from './markdown.pipe';

const articleRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  [
    {
      path: 'article/:slug',
      component: ArticleComponent,
      resolve: {
        article: ArticleResolverService,
      },
    },
  ]
);

@NgModule({
  declarations: [ArticleComponent, ArticleCommentComponent, MarkdownPipe],
  imports: [CommonModule, SharedModule, articleRouting],
})
export class ArticleModule {}
