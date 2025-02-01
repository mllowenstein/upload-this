import { Component, ViewChild } from '@angular/core';
import {
  MatSidenav
}

from '@angular/material/sidenav';

import {
  BreakpointObserver,
  Breakpoints
}

from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']

})

export class AppShellComponent {
  @ViewChild('sidenav') sidenav !: MatSidenav;
  isSmallScreen=false;

  constructor(private breakpointObserver: BreakpointObserver) {

    // Detect screen size and adjust layout
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result=> {
        this.isSmallScreen=result.matches;

        if (this.isSmallScreen) {
          this.sidenav?.close();
        }

        else {
          this.sidenav?.open();
        }
      });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    if (this.isSmallScreen) {
      this.sidenav.close();
    }
  }
}
