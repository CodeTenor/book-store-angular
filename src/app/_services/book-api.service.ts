import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  protected baseUri = ' http://localhost:7071/api';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const searchBooks = `${this.baseUri}/search?q=${query}/`;
    return this.http.get(searchBooks);
  }

  getBookDetailsByIsbn(isbn: string): Observable<any> {
    console.log(isbn);
    const bookByIsbn = `${this.baseUri}/bookdetail?isbn=${isbn}`;
    return this.http.get(bookByIsbn);
  }

  getBookDetailsByWork(work: string): Observable<any> {
    const bookByWork = `${this.baseUri}/bookwork?work=${work.slice(work.lastIndexOf('/') + 1)}`;
    return this.http.get(bookByWork);
  }
}
