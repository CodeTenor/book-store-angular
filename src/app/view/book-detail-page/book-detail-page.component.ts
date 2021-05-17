import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookWorkAdaptor } from 'src/app/_models/book-word-adaptor';
import { BookDetailAdaptor } from 'src/app/_models/book-detail-adaptor';
import { BookWork } from 'src/app/_models/book-work';
import { BookDetail } from 'src/app/_models/book-detail';
import { BookApiService } from 'src/app/_services/book-api.service';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent implements OnInit {

  key: string;
  isbn: string;

  isLoading = 0;
  bookWork: BookWork;
  bookDetail: BookDetail;

  constructor(private route: ActivatedRoute,
              private bookApiService: BookApiService,
              private bookWorkAdaptor: BookWorkAdaptor,
              private bookDetailAdaptor: BookDetailAdaptor) {
    this.route.queryParams.subscribe(params => {
      this.key = JSON.parse(params['key']);
      this.isbn = JSON.parse(params['isbn']);

      this.bookApiService.getBookDetailsByWork(JSON.parse(params['key'])).subscribe(
        result => {
          this.bookWork = this.bookWorkAdaptor.adapt(result);
          this.isLoading++;
        }
      );

      this.bookApiService.getBookDetailsByIsbn(JSON.parse(params['isbn'])).subscribe(
        result => {
          this.bookDetail = this.bookDetailAdaptor.adapt(result, `ISBN:${JSON.parse(params['isbn'])}`);
          this.isLoading++;
        }
      );
    });
  }

  ngOnInit(): void {
  }

  authorFirstName(author_name: string): string {
    return author_name.slice(0, author_name.indexOf(' '));
  }

  authorLastName(author_name: string): string {
    return author_name.slice(author_name.indexOf(' '));
  }

  thumbNail(thumb_nail: string): string {
    if (thumb_nail === undefined) {
      return 'assets/images/no-cover.png';
    }
    return thumb_nail.replace('-S', '-M');
  }

  authorUrl(author_url: string): string {
    return `http://openlibrary.org${author_url}`;
  }
}
