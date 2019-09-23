import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/root.reducer';
import { GetBooksRequested } from './store/actions/book.action';
import { GetCommentsRequested } from './store/actions/comment.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<State>) {

  }

  ngOnInit() {

      this.store.dispatch(new GetBooksRequested());
      this.store.dispatch(new GetCommentsRequested());
  }
}
