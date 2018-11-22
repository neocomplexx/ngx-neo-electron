import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxNeoElectronService } from './ngx-neo-electron.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxNeoElectronModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNeoElectronModule,
      providers: [NgxNeoElectronService]
    };
  }
 }
