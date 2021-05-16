import { Injectable } from '@angular/core';
import { Adaptor } from './adaptor';
import { BookWork } from './book-work';

@Injectable()
export class BookWorkAdaptor implements Adaptor<BookWork> {
    adapt(item: any): BookWork {
      return new BookWork(item.description.value, item.first_publish_date, item.links[0].url);
    }
}
