import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { navbarData } from './navbardata';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  navData = navbarData;
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 765) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  onMouseenter() {
    if(!this.collapsed)
      this.collapsed = true;
  }

  onMouseLeave() {
    if(this.collapsed)
      this.collapsed = false;
  }
}
