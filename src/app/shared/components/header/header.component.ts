import { ActivatedRoute, Router } from '@angular/router';
import { Logout } from './../../../core/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Component, OnInit, Input, Renderer2, NgZone } from '@angular/core';
import { MenuItem } from '@app/core/models/menu-item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navigation: MenuItem[];
  isActiveMenu: boolean = false;
  isIOS: boolean = false;
  isDetailedPage: boolean = false;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private location: Location,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    /** Detect ios for showing back button */
    this.detectIOS();

    /** Method for close the nagivation menu on router change */
    this.router.events.subscribe(() => {
      this.isDetailedPage = this.router.url.includes('detailed');
      this.isActiveMenu = false;
      this.renderer.removeClass(document.body, 'no-scroll');
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

  detectIOS() {
    this.isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  }

  goBack() {
    this.ngZone.run(() => {
      this.location.back();
    });
  }

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Logout());
  }
}
