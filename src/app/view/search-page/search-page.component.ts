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
  booksLoading = true;

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
          this.booksLoading = false;
        }
      )
    }
  }
}
