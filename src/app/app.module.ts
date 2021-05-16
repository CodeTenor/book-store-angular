import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LayoutComponent } from './view/layout/layout/layout.component';
import { MenuBarComponent } from './view/layout/menu-bar/menu-bar.component';
import { HomeComponent } from './view/home/home.component';
import { SearchPageComponent } from './view/search-page/search-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderSectionComponent } from './view/layout/header-section/header-section.component';
import { SideBarComponent } from './view/layout/side-bar/side-bar.component';

import { BookApiService } from './_services/book-api.service';
import { BookSearchAdaptor } from './_models/book-search-adaptor';
import { BookDetailPageComponent } from './view/book-detail-page/book-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuBarComponent,
    HomeComponent,
    SearchPageComponent,
    HeaderSectionComponent,
    SideBarComponent,
    BookDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    BookApiService,
    BookSearchAdaptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
