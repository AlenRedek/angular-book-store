import { Component, OnInit, OnChanges } from '@angular/core';
//import { IBook } from '../book';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit, OnChanges {

  ngOnInit(){
    console.log('Init', this.booksInStock);
  }

  ngOnChanges(){
    console.log('New change detected');
  }

  imageWidth:number = 100;
  showImage:boolean = true;
  booksInStock:number = 10;

  books:any[] = [{
    bookAuthor: 'Leo Tolstoy',
    bookTitle: 'War and Peace 2',
    bookPrice: 19.95,
    bookDescription: 'Book of historical fiction',
    publishedOn: new Date('02/11/1921'),
    inStock: 'yes',
    bookReviews: 15,
    bookImageUrl: 'app/assets/images/656.jpg'
  }]

  toggleImage():void {
    this.showImage = !this.showImage;
  }
}
