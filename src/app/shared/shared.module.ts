import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidelistviewComponent } from './sharedfeatures/sidelistview/sidelistview.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AccordionComponent } from './sharedfeatures/accordion/accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SidelistviewComponent, AccordionComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports: [SidelistviewComponent, AccordionComponent]
})
export class SharedModule { }
