import { Action } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/book';
import { BookActions, BooksActionTypes } from './book.action';

export const booksAdapter = createEntityAdapter<Book>()

export interface BookState {
    ids:number[],
    entities:{[key:number] : Book}
};

export const initialState: BookState={
    ids:[],
    entities:{}
}

export function bookReducer(state: BookState = initialState, action: BookActions) {
    switch(action.type){
        case BooksActionTypes.ADD_BOOK: {
            return booksAdapter.addOne(action.book, state);
        }
        case BooksActionTypes.EDIT_BOOK: {
            return booksAdapter.updateOne(action.book, state);
        }
        default:
            return state;
    }
}
