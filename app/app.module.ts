import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { BookService } from './books/book.service';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { FavoriteComponent } from './favorites/favorite.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TruncatePipe } from './shared/pipes/truncate.pipe';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'books', component: BooksListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers:    [ BookService ],
  declarations: [ AppComponent, HomeComponent, BooksListComponent, FavoriteComponent, HighlightDirective, TruncatePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
