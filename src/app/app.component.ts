import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from './services/auth.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthenticationService
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  }
}
