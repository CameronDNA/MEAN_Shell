
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    ,private router: Router
  ){}

  public getHttp() {
    return this.http;
  }


  geTrakt(){
    return this.http.get('/api/Trakt').pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(3)))
  );
  }

  // END OF AUTHENTICATION SERVICE
}
