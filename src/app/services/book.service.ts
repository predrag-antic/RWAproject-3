import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

const url = "http://localhost:3000/books/";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(url);
  }

  public getBookById(id: string): Observable<Book> {
    if (typeof id === "undefined" || id === null){
      return of(null);
    }
    return this.http.get<Book>(`${url}/${id}`)
  }


}
