import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState, selectAllBooks } from '../../store/books.reducer';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService, private store: Store<BooksState>) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
