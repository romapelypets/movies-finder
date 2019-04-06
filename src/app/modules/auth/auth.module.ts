import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '@app/shared/shared.module';
import {} from '@angular/forms';
@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  imports: [SharedModule, AuthRoutingModule, CommonModule]
})
export class AuthModule {}
