import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

const url = "http://localhost:3000/books";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

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

  public postBook(book: Book) : Observable<Book> {
    return this.http.post<Book>(url,book)
  }

  public putBook(book: Book) : Observable<Book> {
    return this.http.put<Book>(`${url}/${book.id}`,book,httpOptions)
  }

}
