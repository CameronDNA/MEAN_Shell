import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {take, delay, retryWhen, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
    , private router: Router

  ) {}

  public getHttp() {
    return this.http;
  }

  GetBooks(){
    return this.http.get('/api/Books').pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(3)))
    );
  }

  CreateBook(NewBook){
    let body = JSON.stringify(NewBook);
    return this.http.post('/api/Books/', body, httpOptions).pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(3)))
  );
  }

}
