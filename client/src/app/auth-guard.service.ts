import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(Data) {
      return true;
  }

}
