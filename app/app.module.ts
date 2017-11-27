import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
