import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/find';
import 'rxjs/add/observable/throw';

import { IBook } from './book';

@Injectable()

export class BookService {

  constructor(private _http:Http){}

  getBooks():Observable<IBook[]> {
    return this._http
      .get('api/books/books.json')
      .map( (response:Response) => <IBook[]> response.json() )
      .do( data => console.log(data) )
      .catch(this.handleError);
  }

  getBook(id:string):Observable<IBook> {
    return this.getBooks()
    .map( (books:IBook[]) => books.find(book => book.id === id) )
    .do( data => console.log(data) );
  }

  private handleError(error:Response){
    console.log(error);
    let message = `Error status code ${error.status} at ${error.url}`;

    return Observable.throw(message);
  }
}
