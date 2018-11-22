import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNeoElectronModule } from 'ngx-neo-electron';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNeoElectronModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
