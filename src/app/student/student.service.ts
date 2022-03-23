import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Student } from './student';
    
@Injectable({
  providedIn: 'root'
})
export class StudentService {
    
  private apiURL = "http://localhost:8000/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiURL + '/students/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiURL + '/students/', JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id): Observable<Student> {
    return this.httpClient.get<Student>(this.apiURL + '/students/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id, student): Observable<Student> {
    return this.httpClient.put<Student>(this.apiURL + '/students/' + id, JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id){
    return this.httpClient.delete<Student>(this.apiURL + '/students/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}