import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  protected baseUri = 'http://openlibrary.org';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const searchBooks = `${this.baseUri}/search.json?q=${query.replace(' ', '+')}/`;
    return this.http.get(searchBooks);
  }

  getBookDetailsByIsbn(isbn: string): Observable<any> {
    const bookByIsbn = `${this.baseUri}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=details`;
    return this.http.get(bookByIsbn);
  }

  getBookDetailsByWork(work: string): Observable<any> {
    const bookByWork = `${this.baseUri}${work}.json`;
    return this.http.get(bookByWork);
  }
}
