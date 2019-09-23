import { ActionReducerMap } from '@ngrx/store';
import { BookState, bookReducer } from './book.reducer';
import { CommentState, commentReducer } from './comment.reducer';

export interface State {
    book: BookState,
    comment: CommentState
}

export const rootReducer: ActionReducerMap<State> = {
    book: bookReducer,
    comment: commentReducer
}