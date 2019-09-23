import { Action } from '@ngrx/store';
import { Comment } from 'src/app/models/comment';

export enum CommentsActionTypes {
    GET_COMMENTS = '[Get comment]',
    GET_COMMENTS_REQUESTED = '[Get comment requested]',
    ADD_COMMENT = '[Add comment]',
    ADD_COMMENT_SUCCESS = '[Add comment succes]'
  };

  export class GetComments implements Action {
    readonly type = CommentsActionTypes.GET_COMMENTS;
    constructor( public comments: Comment[]) {}
}

export class GetCommentsRequested implements Action {
  readonly type = CommentsActionTypes.GET_COMMENTS_REQUESTED;
  constructor() {}
}

export class AddComment implements Action {
    readonly type = CommentsActionTypes.ADD_COMMENT;
    constructor( public comment: Comment) {}
  }
  
  export class AddCommentSucces implements Action {
    readonly type = CommentsActionTypes.ADD_COMMENT_SUCCESS;
    constructor( public comment: Comment) {}
  }

  
export type CommentActions = AddComment 
| AddCommentSucces 
| GetCommentsRequested 
| GetComments; 