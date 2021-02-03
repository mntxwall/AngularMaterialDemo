import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post, postResult} from './post';
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


  getMasterRows(): Observable<Post[]> {
    return this.http.get<Post[]>(this.blogsUrl + '/first').pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Post[]>('getHeroes', []))
    );
  }

  setCookiesTest(): Observable<postResult[]> {
    console.log("HelloCookies");
    return this.http.post<postResult[]>(this.blogsUrl + '/cookies', "", {withCredentials: true}).pipe(
      tap(_ => this.log('setCookiesTestBody')),
      catchError(this.handleError<postResult[]>('setCookies', []))
    );
  }

  clearCookiesTest(): Observable<postResult[]> {
    console.log("resetCookies");
    return this.http.post<postResult[]>(this.blogsUrl + '/clear', "", {withCredentials: true}).pipe(
      tap(_ => this.log('setCookiesTestBody')),
      catchError(this.handleError<postResult[]>('setCookies', []))
    );
  }



  postTables(tableName: string, rowNumber: number): Observable<Post[]> {
  return this.http.get<Post[]>(this.blogsUrl + `/first?table=${tableName}&rowID=${rowNumber}`).pipe(
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
