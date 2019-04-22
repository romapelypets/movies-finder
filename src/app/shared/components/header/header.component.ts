import { Logout } from './../../../core/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Logout());
  }
}
