import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthHeaderComponent, AuthFooterComponent, PageTitleComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, HeaderComponent, FooterComponent, AuthHeaderComponent, AuthFooterComponent, PageTitleComponent]
})
export class SharedModule {}
