import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { GetBookRequested } from 'src/app/store/actions/book.action';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book:Book;

  constructor(private store:Store<State>) { }

  ngOnInit() {
  }

}
