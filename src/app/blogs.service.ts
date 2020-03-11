import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  private blogsUrl = 'http://192.168.50.60:9000/api';  // URL to web api

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.blogsUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Post[]>('getHeroes', []))
    );
  }



  postTables(): Observable<Post[]> {
  return this.http.get<Post[]>(this.blogsUrl + '/first?table=suspect&rowID=9').pipe(
    tap(_ => this.log('fetched heroes')),
  catchError(this.handleError<Post[]>('getHeroes', []))
);
}

  private log(message: string) {
    console.log(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
