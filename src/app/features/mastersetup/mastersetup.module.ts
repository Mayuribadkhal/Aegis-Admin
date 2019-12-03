import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MastersetupRoutingModule } from './mastersetup-routing.module';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceComponent } from './source/source.component';
import { DistributorTypeListComponent } from './distributor-type-list/distributor-type-list.component';
import { DistributorTypeComponent } from './distributor-type/distributor-type.component';
import { ClientTypeListComponent } from './client-type-list/client-type-list.component';
import { ClientTypeComponent } from './client-type/client-type.component';
import { ClientCunsumListComponent } from './client-cunsum-list/client-cunsum-list.component';
import { ClientCunsumComponent } from './client-cunsum/client-cunsum.component';
import { CategoryByVolumeListComponent } from './category-by-volume-list/category-by-volume-list.component';
import { CategoryByVolumeComponent } from './category-by-volume/category-by-volume.component';
import { ClientTypeServiceListComponent } from './client-type-service-list/client-type-service-list.component';
import { ClientTypeServiceComponent } from './client-type-service/client-type-service.component';
import { ContractualListComponent } from './contractual-list/contractual-list.component';
import { ContractualComponent } from './contractual/contractual.component';
import { PosListComponent } from './pos-list/pos-list.component';
import { PosComponent } from './pos/pos.component';
import { ROTypeListComponent } from './ro-type-list/ro-type-list.component';
import { ROTypeComponent } from './ro-type/ro-type.component';
import { SpTypeListComponent } from './sp-type-list/sp-type-list.component';
import { SpTypeComponent } from './sp-type/sp-type.component';
import { FirmTypeListComponent } from './firm-type-list/firm-type-list.component';
import { FirmTypeComponent } from './firm-type/firm-type.component';
import { TypeCallListComponent } from './type-call-list/type-call-list.component';
import { TypeCallComponent } from './type-call/type-call.component';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionComponent } from './action/action.component';
import { DroppedReasonListComponent } from './dropped-reason-list/dropped-reason-list.component';
import { DroppedReasonComponent } from './dropped-reason/dropped-reason.component';
import { WorkRequestListComponent } from './work-request-list/work-request-list.component';
import { WorkRequestComponent } from './work-request/work-request.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LeadCategoryListComponent } from './lead-category-list/lead-category-list.component';
import { LeadCategoryComponent } from './lead-category/lead-category.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusComponent } from './status/status.component';
import { StatusMappingListComponent } from './status-mapping-list/status-mapping-list.component';
import { StatusMappingComponent } from './status-mapping/status-mapping.component';

@NgModule({
  declarations: [SourceListComponent, SourceComponent, DistributorTypeListComponent, DistributorTypeComponent, ClientTypeListComponent, ClientTypeComponent, ClientCunsumListComponent, ClientCunsumComponent, CategoryByVolumeListComponent, CategoryByVolumeComponent, ClientTypeServiceListComponent, ClientTypeServiceComponent, ContractualListComponent, ContractualComponent, PosListComponent, PosComponent, ROTypeListComponent, ROTypeComponent, SpTypeListComponent, SpTypeComponent, FirmTypeListComponent, FirmTypeComponent, TypeCallListComponent, TypeCallComponent, ActionListComponent, ActionComponent, DroppedReasonListComponent, DroppedReasonComponent, WorkRequestListComponent, WorkRequestComponent, HolidayListComponent, HolidayComponent, LeadCategoryListComponent, LeadCategoryComponent, StatusListComponent, StatusComponent, StatusMappingListComponent, StatusMappingComponent],
  imports: [
    CommonModule,
    MastersetupRoutingModule,
    SharedModule
  ]
})
export class MastersetupModule { }
