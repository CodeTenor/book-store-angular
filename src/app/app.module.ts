import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './view/layout/layout/layout.component';
import { MenuBarComponent } from './view/layout/menu-bar/menu-bar.component';
import { HomeComponent } from './view/home/home.component';
import { SearchPageComponent } from './view/search-page/search-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuBarComponent,
    HomeComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
