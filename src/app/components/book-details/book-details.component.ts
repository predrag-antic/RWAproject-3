import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/root.reducer';
import { EditBook } from 'src/app/store/book.action';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  @Input()
  book: Book;

  constructor( private route: ActivatedRoute, private store:Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];

      this.store.select(store=>store.book.entities?store.book.entities[id]:null)
      .subscribe(b=> this.book=b);
      })
    }


    addToFavorites() {
      if(this.book.favorite==="no")
      {
        this.book.favorite="yes";
        this.store.dispatch(new EditBook(this.book));
        alert("Book added to favorites.")
      }
      else
      {
        this.book.favorite="no";
        this.store.dispatch(new EditBook(this.book));
        alert("Book removed from favorites.")
      }
    }
}
