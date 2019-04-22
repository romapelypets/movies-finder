import { Logout } from './../../../core/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private store: Store<AppState>) {}

  ngOnInit() {}

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Logout());
  }
}
