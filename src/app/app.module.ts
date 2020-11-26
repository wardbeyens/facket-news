import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // core & shared
    SharedModule,
    CoreModule,
    LayoutModule,

    // 3rd party

    // app
    HomeModule,
    AuthModule,
    ArticleModule,
    SettingsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
