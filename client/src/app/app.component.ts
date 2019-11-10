import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import {Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []

})


export class AppComponent {

  constructor(public auth: AuthenticationService, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {

  }


  




}
