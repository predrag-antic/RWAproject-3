import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BookState, selectAllBooks } from '../../store/book.reducer';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService, private store: Store<BookState>) { }

  ngOnInit() {
    // this.books$ = this.bookService.getBooks();
    this.books$ = this.store.select(selectAllBooks);

  }

}
