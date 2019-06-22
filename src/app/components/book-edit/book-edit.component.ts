import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/root.reducer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private store:Store<State>,private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];

      this.store.select(store=>store.book.entities?store.book.entities[id]:null)
      .subscribe(b=> this.book=b);
      })
  }

  close() {
    this.location.back();
  }

  save() {
    
  }
}
