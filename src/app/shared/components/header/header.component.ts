import { Logout } from './../../../core/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@app/core/models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navigation: MenuItem[];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Logout());
  }
}
