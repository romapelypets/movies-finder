import { MovieEffects } from './store/effects/movie.effects';
import { appReducer } from './store/reducers/app.reducer';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [HttpClientModule, StoreModule.forRoot(appReducer), EffectsModule.forRoot([MovieEffects])],
  providers: []
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
