import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { selectFavorites } from 'src/app/store/reducers/book.reducer';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites$: Observable<Book[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.favorites$ = this.store.select(selectFavorites);
  }

}
