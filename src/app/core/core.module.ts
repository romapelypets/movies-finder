import { AuthEffects } from './store/effects/auth.effects';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MovieEffects } from './store/effects/movie.effects';
import { appReducer } from './store/reducers/app.reducer';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InboundInterceptor } from './interceptors/inbound.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([MovieEffects, AuthEffects]),
    BrowserAnimationsModule,
    StoreDevtoolsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InboundInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
