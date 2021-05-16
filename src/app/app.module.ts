import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './view/layout/layout/layout.component';
import { MenuBarComponent } from './view/layout/menu-bar/menu-bar.component';
import { HomeComponent } from './view/home/home.component';
import { SearchPageComponent } from './view/search-page/search-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderSectionComponent } from './view/layout/header-section/header-section.component';
import { SideBarComponent } from './view/layout/side-bar/side-bar.component';

import { BookApiService } from './_services/book-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuBarComponent,
    HomeComponent,
    SearchPageComponent,
    HeaderSectionComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
