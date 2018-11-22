import { Component } from '@angular/core';
import { NgxNeoElectronService } from 'ngx-neo-electron';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private electronService: NgxNeoElectronService) { }

  public isElectron(): boolean {
    return this.electronService.isElectronApp;
  }
}
