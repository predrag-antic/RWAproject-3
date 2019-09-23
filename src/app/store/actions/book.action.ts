import {Action} from '@ngrx/store';
import { Book } from '../../models/book';
import { Update } from '@ngrx/entity';


export enum BooksActionTypes {
  GET_BOOKS = '[Get books]',
  GET_BOOKS_REQUESTED = '[Get books requested]',
  GET_BOOK = '[Get book]',
  GET_BOOK_REQUESTED = '[Get book requested]',
  ADD_BOOK = '[Add book]',
  ADD_BOOK_SUCCESS = '[Add book succes]',
  EDIT_BOOK = '[Edit book]',
  EDIT_BOOK_SUCCESS = '[Edit book succes]'
};

export class GetBooks implements Action {
    readonly type = BooksActionTypes.GET_BOOKS;
    constructor( public books: Book[]) {}
}

export class GetBooksRequested implements Action {
  readonly type = BooksActionTypes.GET_BOOKS_REQUESTED;
  constructor() {}
}

export class GetBook implements Action {
  readonly type = BooksActionTypes.GET_BOOK;
  constructor( public book: Book) {}
}

export class GetBookRequested implements Action {
  readonly type = BooksActionTypes.GET_BOOK_REQUESTED;
  constructor(public id: number) {}
}

export class EditBook implements Action {
  readonly type = BooksActionTypes.EDIT_BOOK;
  constructor(public editedBook: Book) {}
}

export class EditBookSucces implements Action {
  readonly type = BooksActionTypes.EDIT_BOOK_SUCCESS;
  constructor( public id: number, public editedBook: Partial<Book>) {}
}

export class AddBook implements Action {
  readonly type = BooksActionTypes.ADD_BOOK;
  constructor( public book: Book) {}
}

export class AddBookSucces implements Action {
  readonly type = BooksActionTypes.ADD_BOOK_SUCCESS;
  constructor( public book:Book) {}
}

export type BookActions = AddBook 
        | EditBook 
        | GetBooks 
        | AddBookSucces 
        | EditBookSucces 
        | GetBooksRequested
        | GetBookRequested
        | GetBook; 