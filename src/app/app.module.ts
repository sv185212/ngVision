import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './features/sidenav/sidenav.component';
import { BodyComponent } from './features/body/body.component';
import { SharedModule } from './shared/shared.module';
import { HorizontalnavComponent } from './features/horizontalnav/horizontalnav.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    HorizontalnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
