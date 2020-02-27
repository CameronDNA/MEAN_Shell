import { Component, OnInit,ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){ }

  ngOnInit() {
  }

}
