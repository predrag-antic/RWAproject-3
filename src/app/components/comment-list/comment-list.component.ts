import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input()
  comments: Observable<Comment[]>;

  constructor() { }

  ngOnInit() {
  }

}
