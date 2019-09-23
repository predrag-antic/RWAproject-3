import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';


const url = "http://localhost:3000/comments";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) { }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(url)
  }

  public postComment(comment: Comment) : Observable<Comment> {
    return this.http.post<Comment>(url, comment);
  }

}
