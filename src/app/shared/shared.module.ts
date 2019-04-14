import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { MinuteToHourPipe } from './pipes/minute-to-hour.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    PageTitleComponent,
    PreloaderComponent,
    MinuteToHourPipe
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    PageTitleComponent,
    PreloaderComponent,
    MinuteToHourPipe
  ]
})
export class SharedModule {}
