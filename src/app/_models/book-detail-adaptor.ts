import { Injectable } from '@angular/core';
import { Adaptor } from './adaptor';
import { BookDetail } from './book-detail';

@Injectable()
export class BookDetailAdaptor implements Adaptor<BookDetail> {
    adapt(item: any, jsonRouting: string): BookDetail {
      return new BookDetail(item[jsonRouting].info_url, item[jsonRouting].thumbnail_url === undefined ? undefined : item[jsonRouting].thumbnail_url,
                            item[jsonRouting].details.number_of_pages,
                            item[jsonRouting].details.authors === undefined ? undefined : item[jsonRouting].details.authors[0].name,
                            item[jsonRouting].details.authors === undefined ? undefined : item[jsonRouting].details.authors[0].key);
    }
}
