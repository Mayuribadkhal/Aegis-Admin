import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { OperationalRoutingModule } from './operational-routing.module';
import { ChaneelPartnerListComponent } from './chaneel-partner-list/chaneel-partner-list.component';
import { ChaneelPartnerComponent } from './chaneel-partner/chaneel-partner.component';

@NgModule({
  declarations: [ChaneelPartnerListComponent, ChaneelPartnerComponent],
  imports: [
    CommonModule,
    OperationalRoutingModule,
    SharedModule
  ]
})
export class OperationalModule { }
