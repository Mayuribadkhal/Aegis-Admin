import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { OperationalRoutingModule } from './operational-routing.module';
import { ChaneelPartnerListComponent } from './chaneel-partner-list/chaneel-partner-list.component';
import { ChaneelPartnerComponent } from './chaneel-partner/chaneel-partner.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [ChaneelPartnerListComponent, ChaneelPartnerComponent,CustomerMasterComponent,NewCustomerComponent,UpdateCustomerComponent],
  imports: [
    CommonModule,
    OperationalRoutingModule,
    SharedModule
  ]
})
export class OperationalModule { }
