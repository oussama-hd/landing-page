import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class BlinkService {
    private _sideNavOpen = false;
    private _showNavMenu = false;
  
    get sideNavOpen(): boolean {
      return this._sideNavOpen;
    }
  
    set sideNavOpen(value: boolean) {
      this._sideNavOpen = value;
    }
  
    get showNavMenu(): boolean {
      return this._showNavMenu;
    }
  
    set showNavMenu(value: boolean) {
      this._showNavMenu = value;
    }
  }
  