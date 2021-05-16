import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { BookSearchAdaptor } from 'src/app/_models/book-search-adaptor';
import { BookApiService } from 'src/app/_services/book-api.service';
import { BookSearch } from '../../_models/book-search';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchForm: FormGroup;
  books: BookSearch[];
  paginationBooks: BookSearch[];
  booksLoading = false;

  constructor(private bookApiService: BookApiService,
              private formbuilder: FormBuilder,
              private bookSearchAdaptor: BookSearchAdaptor,
              private router: Router) {
    this.searchForm = formbuilder.group({
      searchPhrase: new FormControl(null, [Validators.required]),
    }
    );
  }

  ngOnInit(): void {
  }

  searchBook() {
    if (this.searchForm.valid) {
      this.booksLoading = true;
      this.bookApiService.searchBooks(this.searchForm.controls.searchPhrase.value).subscribe(
        result => {
          this.books = result.docs.map(x => this.bookSearchAdaptor.adapt(x));
          this.booksLoading = false;
        }
      )
    }
  }

  getCover(cover_id: string): string {
    if (cover_id === undefined) {
      return 'assets/images/no-cover.png';
    } else {
      return `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
    }
  }

  public navigateToBookDetails(book: BookSearch) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          'key': JSON.stringify(book.key),
          'isbn': JSON.stringify(book.isbn)
      }
    };

    this.router.navigate(['book'],  navigationExtras);
  }
}
