import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticlesPaginationComponent } from './articles-pagination/articles-pagination.component';
import { NgRepeatDirective } from './ng-repeat.directive';
import { HighlightDirective } from './highlight.directive';
import { ArticleFrameComponent } from './article-frame/article-frame.component';
import { TextArticleComponent } from './text-article/text-article.component';
import { ImageArticleComponent } from './image-article/image-article.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticleComponent,
    ArticleListComponent,
    AdminComponent,
    NavigationComponent,
    ArticleTableComponent,
    ArticlesPaginationComponent,
    NgRepeatDirective,
    HighlightDirective,
    ArticleFrameComponent,
    TextArticleComponent,
    ImageArticleComponent,
    NotificationComponent,
    NotificationContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent]
})
export class AppModule { }
