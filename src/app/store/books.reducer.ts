import { Action } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/book';
import { BookActions, BooksActionTypes } from './book.action';

export const booksAdapter = createEntityAdapter<Book>()

export interface BooksState {
    ids:number[],
    entities:{[key:number] : Book}
};

export const initialState: BooksState={
    ids:[],
    entities:{}
}

export function booksReducer(state: BooksState = initialState, action: BookActions) {
    switch(action.type){
        case BooksActionTypes.GET_BOOKS: { 
            return booksAdapter.addAll(action.books, state)
        }
        default:
            return state;
    }
}

export const getCommentState= createFeatureSelector<BooksState>('books');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = booksAdapter.getSelectors(getCommentState);

export const selectAllBooks = selectAll;