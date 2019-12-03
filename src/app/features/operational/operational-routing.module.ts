import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaneelPartnerListComponent } from '@app/features/operational/chaneel-partner-list/chaneel-partner-list.component';
import { ChaneelPartnerComponent } from '@app/features/operational/chaneel-partner/chaneel-partner.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalRoutingModule { }
