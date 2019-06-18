import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor( private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];

      this.bookService.getBookById(id).subscribe(book => {
        this.book = book;
      })
    })
  }

}
