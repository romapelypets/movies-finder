import { ActivatedRoute, Router } from '@angular/router';
import { Logout } from './../../../core/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { MenuItem } from '@app/core/models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navigation: MenuItem[];
  isActiveMenu: boolean = false;

  constructor(private store: Store<AppState>, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    /** Method for close the nagivation menu on router change */
    this.router.events.subscribe(item => {
      console.log(item);
      this.isActiveMenu = false;
    });
  }

  toggleMenu() {
    if (this.isActiveMenu) {
      this.renderer.removeClass(document.body, 'no-scroll');
    } else {
      this.renderer.addClass(document.body, 'no-scroll');
    }
    this.isActiveMenu = !this.isActiveMenu;
  }

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Logout());
  }
}
