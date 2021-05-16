import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  protected baseUri = 'https://openlibrary.org/';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    //http://openlibrary.org/search.json?q=the+lord+of+the+rings
    const searchBooks = `${this.baseUri}/search${query.replace(' ', '+')}`;
    return this.http.get(searchBooks);
  }
}
