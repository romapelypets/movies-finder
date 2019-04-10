import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  logout(event: Event) {
    event.preventDefault();
    this.authService.signOut().then(
      () => {
        this.localStorage.clear();
        this.router.navigate(['/auth', 'login']);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.message);
      }
    );
  }
}
