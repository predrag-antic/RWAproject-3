import { booksReducer, BooksState } from './books.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { BookState, bookReducer } from './book.reducer';

export interface State {
    books: BooksState,
    book: BookState
}

export const rootReducer: ActionReducerMap<State> = {
    books: booksReducer,
    book: bookReducer
}