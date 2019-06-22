import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/root.reducer';
import { Router } from '@angular/router';
import { selectNumOfBooks } from 'src/app/store/book.reducer';
import { AddBook } from 'src/app/store/book.action';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book;
  numOfBooks : number;

  addedBook = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
    description: new FormControl(''),
    rating: new FormControl(''),
    pages: new FormControl(''),
    published: new FormControl(''),
    imageUrl: new FormControl('')
  });

  constructor(private store:Store<State>,private router: Router) { }

  ngOnInit() {
    this.store.select(selectNumOfBooks).subscribe(num => this.numOfBooks = num);
    console.log(this.numOfBooks);
  }
  

  onSubmit() {
    if(this.handleError()){
      this.book = {
        id: this.numOfBooks+1,
        title: this.addedBook.value.title,
        author: this.addedBook.value.author,
        genre: this.addedBook.value.genre,
        description: this.addedBook.value.description,
        rating: this.addedBook.value.rating,
        pages: this.addedBook.value.pages,
        published: this.addedBook.value.published,
        imageUrl: this.addedBook.value.imageUrl
    }
      this.store.dispatch(new AddBook(this.book));
      this.router.navigate(['/home']);
    }
      
    }

    handleError(){
      if ( this.addedBook.value.title.length===0 || this.addedBook.value.author.length===0 || this.addedBook.value.description.length===0 || this.addedBook.value.genre.length===0 )
        return false;
      return true;
    }

  

}
