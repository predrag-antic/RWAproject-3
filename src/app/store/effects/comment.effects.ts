import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CommentService } from '../../services/comment.service';
import { CommentsActionTypes, AddComment } from '../actions/comment.action';


@Injectable()
export class CommentEffect {

    constructor(private service: CommentService, private actions: Actions) {}

    getComments = createEffect(()=>
        this.actions
        .pipe(
            ofType(CommentsActionTypes.GET_COMMENTS_REQUESTED),
            mergeMap(()=> this.service.getComments()
            .pipe(
                map(comments => ({
                    type: CommentsActionTypes.GET_COMMENTS,
                    comments: comments
                }))
            ))
        )
    )

    addComment = createEffect(() => 
    this.actions.pipe(
        ofType<AddComment>(CommentsActionTypes.ADD_COMMENT),
        map((action) => action.comment),
        mergeMap((newComment) => this.service.postComment(newComment)
        .pipe(
            map((comment) =>({
                type: CommentsActionTypes.ADD_COMMENT_SUCCESS,
                comment:comment
            }))
        ))
    )
    )

}