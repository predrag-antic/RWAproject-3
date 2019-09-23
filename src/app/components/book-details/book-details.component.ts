import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { EditBook, EditBookSucces } from 'src/app/store/actions/book.action';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { selectAllComments } from 'src/app/store/reducers/comment.reducer';
import { map } from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  rated: boolean = false;
  comments$: Observable<Comment[]>;
  book: Book;

  constructor( private route: ActivatedRoute, private store:Store<State>) { }

  

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];

      this.store.select(store=>store.book.entities?store.book.entities[id]:null)
      .subscribe(b=> this.book=b);

    })

    this.comments$ = this.store.select(selectAllComments);
    this.commentsFromBookId(this.comments$, this.book.id);
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

    countStar(star) {
      this.rated = localStorage.getItem(JSON.stringify(this.book.id))==='true';
      // console.log(this.liked)
      this.rated===false?(
        this.book.ratingSum += star,
        this.book.ratings += 1,
        this.store.dispatch(new EditBook(this.book)),
        localStorage.setItem(JSON.stringify(this.book.id),JSON.stringify(true))
      )
      :
      alert("You already rated!");
        
    }

    commentsFromBookId(comments: Observable<Comment[]>, bookId: number){
      this.comments$ = comments
        .pipe(
          map(comments=>comments.filter(comment=>comment.bookId === bookId))
      )
    }

}
