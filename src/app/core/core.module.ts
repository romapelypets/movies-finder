import { MovieEffects } from './store/effects/movie.effects';
import { appReducer } from './store/reducers/app.reducer';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MovieEffects]),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: []
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
