import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaneelPartnerListComponent } from '@app/features/operational/chaneel-partner-list/chaneel-partner-list.component';
import { ChaneelPartnerComponent } from '@app/features/operational/chaneel-partner/chaneel-partner.component';
import { CustomerMasterComponent } from '@app/features/operational/customer-master/customer-master.component';
import { NewCustomerComponent } from '@app/features/operational/new-customer/new-customer.component';
import { UpdateCustomerComponent } from '@app/features/operational/update-customer/update-customer.component';

const routes: Routes = [

  {
    path: 'channel-partner-list',
    component: ChaneelPartnerListComponent,
    data: {
        pageTitle: 'channel-partner-list'
    }
  },
  {
    path: 'channel-partner',
    component: ChaneelPartnerComponent,
    data: {
        pageTitle: 'channel-partner'
    }
  },
  {
    path: 'customer-list',
    component: CustomerMasterComponent,
    data: {
        pageTitle: 'customer-list'
    }
  },
  {
    path: 'new-customer',
    component: NewCustomerComponent,
    data: {
        pageTitle: 'new-customer'
    }
  },
  {
    path: 'update-customer',
    component: UpdateCustomerComponent,
    data: {
        pageTitle: 'update-customer'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalRoutingModule { }
