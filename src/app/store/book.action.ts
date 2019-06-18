import {Action} from '@ngrx/store';
import { Book } from '../models/book';
import { Update } from '@ngrx/entity';


export enum BooksActionTypes {
  GET_BOOKS = '[Get books]',
  ADD_BOOK = '[Add book]',
  EDIT_BOOK = '[Edit book]'
}
// export const GET_BOOKS = '[Get books]';
// export const ADD_BOOK = '[Add book]';
// export const EDIT_BOOK = '[Edit book]';

export class GetBooks implements Action {
    readonly type = BooksActionTypes.GET_BOOKS;
    constructor( public books: Book[]) {}
}

export class EditBook implements Action {
    readonly type = BooksActionTypes.EDIT_BOOK;
    constructor(public book: Update<Book>) {}
  }

  export class AddBook implements Action {
    readonly type = BooksActionTypes.ADD_BOOK;
    constructor( public book: Book) {}
}

export type BookActions = AddBook | EditBook | GetBooks; 