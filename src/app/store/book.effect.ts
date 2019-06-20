import { Injectable } from '@angular/core';
import { BookService } from '../services/book.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { BooksActionTypes, AddBook, EditBook } from './book.action';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class BookEffect {

    constructor(private service: BookService, private actions: Actions) {}

    getBooks = createEffect(() => 
    this.actions
    .pipe(
        ofType(BooksActionTypes.GET_BOOKS_REQUESTED),
        mergeMap(() => this.service.getBooks()
        .pipe(
            map(books => ({
                type: BooksActionTypes.GET_BOOKS,
                books: books
            }))
        ))
    )
    )

    getBook = createEffect(() => 
    this.actions
    .pipe(
        ofType(BooksActionTypes.GET_BOOK_REQUESTED),
        mergeMap(() => this.service.getBooks()
        .pipe(
            map(book => ({
                type: BooksActionTypes.GET_BOOK,
                book: book
            }))
        ))
    )
    )

    addBook = createEffect(() => 
    this.actions.pipe(
        ofType<AddBook>(BooksActionTypes.ADD_BOOK),
        map((action) => action.book),
        mergeMap((newBook) => this.service.postBook(newBook)
        .pipe(
            map((book) =>({
                type: BooksActionTypes.ADD_BOOK_SUCCESS,
                book:book
            }))
        ))
    )
    )

    editBook = createEffect(() =>
    this.actions.pipe(
        ofType<EditBook>(BooksActionTypes.EDIT_BOOK),
        map((action) => action.editedBook),
        mergeMap((editedBook)=>this.service.putBook(editedBook)
        .pipe(
            map((editedBook) => ({
                type: BooksActionTypes.EDIT_BOOK_SUCCESS,
                id: editedBook.id,
                editedBook: editedBook
            }))
            )
        )
        )
    )

}