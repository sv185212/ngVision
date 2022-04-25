import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth : number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngvision';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle) : void {
    console.log("On side Nav pressed");
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

}

