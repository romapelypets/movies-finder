import { appReducer } from './store/reducers/app.reducer';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [HttpClientModule, StoreModule.forRoot(appReducer)],
  providers: []
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
