import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit {

  books:IBook[];
  favoriteMessage:string = '';
  imageWidth:number = 100;
  showImage:boolean = true;
  booksInStock:number = 10;
  errorMessage:string;

  constructor(private _bookService:BookService){}

  ngOnInit(){
    this.getAllBooks();
  }

  getAllBooks(){
    this._bookService.getBooks()
      .subscribe(
        response => this.books = response,
        error => this.errorMessage = <any>error
      );
  }

  onFavoriteClicked(message:string):void {
    this.favoriteMessage = message;
  }

}
