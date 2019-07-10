import { IosInstallComponent } from './shared/components/ios-install/ios-install.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatSnackBar, Overlay]
})
export class AppComponent implements OnInit {
  constructor(private toast: MatSnackBar) {}

  ngOnInit() {
    this.detectIOS();
  }

  detectIOS() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => 'standalone' in (window as any).navigator && (window as any).navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos()) {
      setTimeout(() => {
        this.toast.openFromComponent(IosInstallComponent, {
          duration: 8000,
          horizontalPosition: 'start',
          panelClass: ['mat-elevation-z3']
        });
      });
    }
  }
}
