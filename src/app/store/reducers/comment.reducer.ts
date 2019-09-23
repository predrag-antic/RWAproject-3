import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Comment } from 'src/app/models/comment';
import { CommentActions, CommentsActionTypes } from '../actions/comment.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const commentsAdapter =
    createEntityAdapter<Comment>();

export interface CommentState extends EntityState<Comment> {};

export const initialState: CommentState = commentsAdapter.getInitialState();

export function commentReducer(state: CommentState = initialState, action: CommentActions) {
    switch(action.type){
        case CommentsActionTypes.GET_COMMENTS: { 
            return commentsAdapter.addAll(action.comments, {...state})
        }
        case CommentsActionTypes.ADD_COMMENT_SUCCESS: {
            return commentsAdapter.addOne(action.comment, state);
        }
        default:
            return state;
    }
}

export const selectCommentState = createFeatureSelector<CommentState>('comment');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = commentsAdapter.getSelectors(selectCommentState);

export const selectAllComments = selectAll;

export const selectCommentById = (id: number) => createSelector(
    selectCommentState,
    CommentState => CommentState.entities[id]  
);

export const selectNumOfComments = selectTotal;