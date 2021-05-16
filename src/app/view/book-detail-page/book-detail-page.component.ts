import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookWorkAdaptor } from 'src/app/_models/book-word-adaptor';
import { BookWork } from 'src/app/_models/book-work';
import { BookApiService } from 'src/app/_services/book-api.service';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent implements OnInit {

  key: string;
  isbn: string;

  isLoading = true;
  bookWork: BookWork;

  constructor(private route: ActivatedRoute,
              private bookApiService: BookApiService,
              private bookWorkAdaptor: BookWorkAdaptor) {
    this.bookApiService.getBookDetailsByWork(this.key).subscribe(
      result => {
        this.bookWork = this.bookWorkAdaptor.adapt(result);
      }
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.key = JSON.parse(params['key']);
      this.isbn = JSON.parse(params['isbn']);
    });
  }

}
