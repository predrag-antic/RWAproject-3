import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    title: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    genre: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    rating: new FormControl(''),
    pages: new FormControl(''),
    published: new FormControl(''),
    imageUrl: new FormControl('')
  });

  constructor(private store:Store<State>,private router: Router) { }

  ngOnInit() {
    this.store.select(selectNumOfBooks).subscribe(num => this.numOfBooks = num);
  }
  

  onSubmit() {
    this.book = {
      id: this.numOfBooks+1,
      title: this.addedBook.value.title,
      author: this.addedBook.value.author,
      genre: this.addedBook.value.genre,
      description: this.addedBook.value.description,
      rating: Number(this.addedBook.value.rating),
      pages: Number(this.addedBook.value.pages),
      published: Number(this.addedBook.value.published),
      imageUrl: this.addedBook.value.imageUrl,
      favorite: "no"
    }
    if(this.book.imageUrl==='')
      this.book.imageUrl = "https://www.cvor.rs/wp-content/plugins/recencio-book-reviews/public/images/no-cover.jpg";
    this.store.dispatch(new AddBook(this.book));
    this.router.navigate(['/home']);
      
    }

}
