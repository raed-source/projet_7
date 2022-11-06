import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
