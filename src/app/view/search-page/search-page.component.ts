import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  booksLoading = true;

  // pagination
  page = 1;
  count = 0;
  pageSize = 10;

  constructor(private bookApiService: BookApiService,
              private formbuilder: FormBuilder,
              private bookSearchAdaptor: BookSearchAdaptor) {
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
          this.paginationBooks = this.books.splice(this.page - 1, 11);
          this.booksLoading = false;
        }
      )
    }
  }

  handlePageChange(event): void {
    this.page = event;
    this.paginationBooks = this.books.slice(this.page - 1 , 11);
  }

  getCover(cover_id: string): string {
    if (cover_id === undefined) {
      return 'assets/images/no-cover.png';
    } else {
      return `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
    }
  }
}
