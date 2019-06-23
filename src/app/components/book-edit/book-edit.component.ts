import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/root.reducer';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { selectNumOfBooks } from 'src/app/store/book.reducer';
import { EditBook } from 'src/app/store/book.action';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input()
  book: Book;
  numOfBooks : number;

  
    title= new FormControl('');
    author= new FormControl('');
    genre= new FormControl('');
    description= new FormControl('');
    rating= new FormControl('');
    pages= new FormControl('');
    published= new FormControl('');
    imageUrl= new FormControl('');
  

  constructor(private route: ActivatedRoute, private store:Store<State>,private location: Location,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];

      this.store.select(store=>store.book.entities?store.book.entities[id]:null)
      .subscribe(b=> this.book=b);
      })

      this.store.select(selectNumOfBooks).subscribe(num => this.numOfBooks = num);
      console.log(this.book.title);

      this.title.setValue(this.book.title);
      this.author.setValue(this.book.author);
      this.genre.setValue(this.book.genre);
      this.description.setValue(this.book.description);
      this.rating.setValue(this.book.rating);
      this.pages.setValue(this.book.pages);
      this.published.setValue(this.book.published);
      this.imageUrl.setValue(this.book.imageUrl);
  }

  onSubmit() {

        this.book.title = this.title.value;
        this.book.author = this.author.value;
        this.book.genre = this.genre.value;
        this.book.description = this.description.value;
        this.book.rating = this.rating.value;
        this.book.pages = this.pages.value;
        this.book.published =  this.published.value;
        this.book.imageUrl = this.imageUrl.value;
    
      this.store.dispatch(new EditBook(this.book));
      this.router.navigate(['/home']);
  }

  close() {
    this.location.back();
  }

  
}
