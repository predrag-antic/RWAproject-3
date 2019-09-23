import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { selectNumOfComments } from 'src/app/store/reducers/comment.reducer';
import { Comment } from 'src/app/models/comment';
import { Book } from 'src/app/models/book';
import { AddComment } from 'src/app/store/actions/comment.action';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  
  @Input()
  comment: Comment;
  
  numOfComments:number;
  bookId: number;

  addedComment = new FormGroup({
    email: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required)
  });

  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.select(selectNumOfComments).subscribe(num => this.numOfComments = num);
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];
      this.bookId = id;
    })
  }

  onSubmit() {
      this.comment = {
        id: this.numOfComments+1,
        bookId: Number(this.bookId),
        email: this.addedComment.value.email,
        name: this.addedComment.value.name,
        text: this.addedComment.value.text,
        date: new Date().toLocaleString()
      }
      this.store.dispatch(new AddComment(this.comment));
      console.log(this.comment, 'uspesno')
      this.addedComment.setValue({email:'',name:'',text:''});

  }


}
