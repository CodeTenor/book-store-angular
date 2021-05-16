import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailPageComponent } from './view/book-detail-page/book-detail-page.component';
import { HomeComponent } from './view/home/home.component';
import { SearchPageComponent } from './view/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPageComponent,
    // children:
    // [
    //   { path: 'book', component: BookDetailPageComponent }
    // ]
  },
  { path: 'book', component: BookDetailPageComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
