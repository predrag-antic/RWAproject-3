import { ActionReducerMap } from '@ngrx/store';
import { BookState, bookReducer } from './book.reducer';

export interface State {
    book: BookState
}

export const rootReducer: ActionReducerMap<State> = {
    book: bookReducer
}