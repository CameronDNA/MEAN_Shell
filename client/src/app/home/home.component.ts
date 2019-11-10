import { Component, OnInit,ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {HomeService} from './home.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent {
public Books;
public NewBook = {
  Name : null,
  Author : null
};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,public _HomeService: HomeService, public auth: AuthenticationService){ }

  ngOnInit() {

    this.NewBook = {
      Name : null,
      Author : null
    };

    this.GetBooks();
    
  }

  GetBooks(){
      this.auth.GetBooks().subscribe(
        (data)=> {
            this.Books = data;
          },
        ()=> {
          console.log('Got them Books');
        }
      );
    }

    CreateBook(){
      this.auth.CreateBook(this.NewBook).subscribe(
        ()=> this.GetBooks()
      );
    }  

}
