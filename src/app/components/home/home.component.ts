import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BookState, selectAllBooks, selectBooksByGenre, selectBooksByName } from '../../store/reducers/book.reducer';
import { BookService } from 'src/app/services/book.service';
import { switchMap, flatMap, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$: Observable<Book[]>;
  genres: Observable<string>;
  genresArray = [];
  constructor(private bookService: BookService, private store: Store<BookState>) { }

  ngOnInit() {
    // this.books$ = this.bookService.getBooks();
    this.books$ = this.store.select(selectAllBooks);
    this.genres = this.books$.pipe(switchMap(books=>books.map(book=>book.genre)))
    this.genres.pipe(map(genres=>genres)).subscribe(data=> {this.genresArray.push(data)});
  }

  filterGenres(filterVal: any) {
    console.log(filterVal)
    this.books$ = this.store.select(selectBooksByGenre(filterVal));
  }

  filterName(filterVal: any) {
    this.books$ = this.store.select(selectBooksByName(filterVal))
  }

  loadGenres() {
    this.genresArray = [...new Set(this.genresArray)]
  }
}
