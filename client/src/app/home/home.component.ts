import { Component, OnInit,ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import {Observable} from 'rxjs';
import { AuthenticationService } from '../AuthenticationService.service';

@Component({
  //templateUrl: './home.component.html',
  template : `<div [innerHTML]="Trakt"></div>`,
  styles: [],
  providers: []
})
export class HomeComponent {
  public Trakt;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, public auth : AuthenticationService){ }

  ngOnInit() {
    this.auth.geTrakt().subscribe(
      data=> {
        this.Trakt=data;
      }
    )
  }

}
