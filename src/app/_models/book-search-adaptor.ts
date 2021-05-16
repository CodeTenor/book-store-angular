import { Injectable } from '@angular/core';
import { Adaptor } from './adaptor';
import { BookSearch } from './book-search';

@Injectable()
export class BookSearchAdaptor implements Adaptor<BookSearch> {
    adapt(item: any): BookSearch {
      if (item.isbn === undefined || item.author_name === undefined) {
        return;
      }

      return new BookSearch(item.key, item.title, item.cover_i, item.author_name[0], item.isbn[0]);
    }
}
