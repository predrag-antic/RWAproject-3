import { Action, createSelector, select } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../../models/book';
import { BookActions, BooksActionTypes } from '../actions/book.action';

export const booksAdapter =
    createEntityAdapter<Book>();

export interface BookState extends EntityState<Book> {};

export const initialState: BookState= booksAdapter.getInitialState();

export function bookReducer(state: BookState = initialState, action: BookActions) {
    switch(action.type){
        case BooksActionTypes.GET_BOOKS: { 
            return booksAdapter.addAll(action.books, {...state})
        }
        case BooksActionTypes.GET_BOOK: {
            return booksAdapter.addOne(action.book, state)
        }
        case BooksActionTypes.ADD_BOOK_SUCCESS: {
            return booksAdapter.addOne(action.book, state);
        }
        case BooksActionTypes.EDIT_BOOK_SUCCESS: {
            return booksAdapter.updateOne({
                id: action.id,
                changes: action.editedBook
            }, state);
        }
        default:
            return state;
    }
}

export const selectBookState= createFeatureSelector<BookState>('book');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = booksAdapter.getSelectors(selectBookState);

export const selectAllBooks = selectAll;

export const selectBookById = (id: number) => createSelector(
  selectBookState,
  BookState => BookState.entities[id]  
);

export const selectFavorites = createSelector(
    selectAllBooks,
    books => books.filter(book => book.favorite === "yes")
)

export const selectBooksByGenre = (genre: string) => createSelector(
    selectAllBooks,
    genre!=='All'?(books => books.filter(book => book.genre === genre)):(books=>books)
);

export const selectBooksByName = (name: string) => createSelector(
    selectAllBooks,
    books => books.filter(book=> book.title.toLowerCase().includes(name))
)

export const selectNumOfBooks = selectTotal;