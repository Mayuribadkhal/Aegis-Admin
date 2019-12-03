import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SourceListComponent } from '@app/features/mastersetup/source-list/source-list.component';
import { SourceComponent } from '@app/features/mastersetup/source/source.component';
import { DistributorTypeListComponent } from '@app/features/mastersetup/distributor-type-list/distributor-type-list.component';
import { DistributorTypeComponent } from '@app/features/mastersetup/distributor-type/distributor-type.component';
import { ClientTypeListComponent } from '@app/features/mastersetup/client-type-list/client-type-list.component';
import { ClientTypeComponent } from '@app/features/mastersetup/client-type/client-type.component';
import { ClientCunsumListComponent } from '@app/features/mastersetup/client-cunsum-list/client-cunsum-list.component';
import { ClientCunsumComponent } from '@app/features/mastersetup/client-cunsum/client-cunsum.component';
import { CategoryByVolumeListComponent } from '@app/features/mastersetup/category-by-volume-list/category-by-volume-list.component';
import { CategoryByVolumeComponent } from '@app/features/mastersetup/category-by-volume/category-by-volume.component';
import { ClientTypeServiceListComponent } from '@app/features/mastersetup/client-type-service-list/client-type-service-list.component';
import { ClientTypeServiceComponent } from '@app/features/mastersetup/client-type-service/client-type-service.component';
import { ContractualListComponent } from '@app/features/mastersetup/contractual-list/contractual-list.component';
import { ContractualComponent } from '@app/features/mastersetup/contractual/contractual.component';
import { PosListComponent } from '@app/features/mastersetup/pos-list/pos-list.component';
import { PosComponent } from '@app/features/mastersetup/pos/pos.component';
import { ROTypeListComponent } from '@app/features/mastersetup/ro-type-list/ro-type-list.component';
import { ROTypeComponent } from '@app/features/mastersetup/ro-type/ro-type.component';
import { SpTypeListComponent } from '@app/features/mastersetup/sp-type-list/sp-type-list.component';
import { SpTypeComponent } from '@app/features/mastersetup/sp-type/sp-type.component';
import { FirmTypeListComponent } from '@app/features/mastersetup/firm-type-list/firm-type-list.component';
import { FirmTypeComponent } from '@app/features/mastersetup/firm-type/firm-type.component';
import { TypeCallListComponent } from '@app/features/mastersetup/type-call-list/type-call-list.component';
import { TypeCallComponent } from '@app/features/mastersetup/type-call/type-call.component';
import { ActionListComponent } from '@app/features/mastersetup/action-list/action-list.component';
import { ActionComponent } from '@app/features/mastersetup/action/action.component';
import { DroppedReasonListComponent } from '@app/features/mastersetup/dropped-reason-list/dropped-reason-list.component';
import { DroppedReasonComponent } from '@app/features/mastersetup/dropped-reason/dropped-reason.component';
import { WorkRequestListComponent } from '@app/features/mastersetup/work-request-list/work-request-list.component';
import { WorkRequestComponent } from '@app/features/mastersetup/work-request/work-request.component';
import { HolidayListComponent } from '@app/features/mastersetup/holiday-list/holiday-list.component';
import { HolidayComponent } from '@app/features/mastersetup/holiday/holiday.component';
import { LeadCategoryListComponent } from '@app/features/mastersetup/lead-category-list/lead-category-list.component';
import { LeadCategoryComponent } from '@app/features/mastersetup/lead-category/lead-category.component';
import { StatusListComponent } from '@app/features/mastersetup/status-list/status-list.component';
import { StatusComponent } from '@app/features/mastersetup/status/status.component';
import { StatusMappingListComponent } from '@app/features/mastersetup/status-mapping-list/status-mapping-list.component';
import { StatusMappingComponent } from '@app/features/mastersetup/status-mapping/status-mapping.component';

const routes: Routes = [

  {
    path: 'source-list',
    component: SourceListComponent,
    data: {
        pageTitle: 'source-list'
    }
  },
  {
    path: 'source',
    component: SourceComponent,
    data: {
        pageTitle: 'source'
    }
  },
  {
    path: 'distributortype-list',
    component: DistributorTypeListComponent,
    data: {
        pageTitle: 'distributortype-list'
    }
  },
  {
    path: 'distributortype',
    component: DistributorTypeComponent,
    data: {
        pageTitle: 'distributortype'
    }
  },
  {
    path: 'clienttype-list',
    component: ClientTypeListComponent,
    data: {
        pageTitle: 'clienttype-list'
    }
  },
  {
    path: 'clienttype',
    component: ClientTypeComponent,
    data: {
        pageTitle: 'clienttype'
    }
  },
  {
    path: 'client-cunsum-type-list',
    component: ClientCunsumListComponent,
    data: {
        pageTitle: 'client-cunsum-type-list'
    }
  },
  {
    path: 'client-cunsum-type',
    component: ClientCunsumComponent,
    data: {
        pageTitle: 'client-cunsum-type'
    }
  },
  {
    path: 'category-by-volume-list',
    component: CategoryByVolumeListComponent,
    data: {
        pageTitle: 'category-by-volume-list'
    }
  },  
  {
    path: 'category-by-volume',
    component: CategoryByVolumeComponent,
    data: {
        pageTitle: 'category-by-volume'
    }
  }, 
  {
    path: 'client-service-type-list',
    component: ClientTypeServiceListComponent,
    data: {
        pageTitle: 'client-service-type-list'
    }
  }, 
  {
    path: 'client-service-type',
    component: ClientTypeServiceComponent,
    data: {
        pageTitle: 'client-service-type'
    }
  }, 
  {
    path: 'contractual-list',
    component: ContractualListComponent,
    data: {
        pageTitle: 'contractual-list'
    }
  }, 
  {
    path: 'contractual',
    component: ContractualComponent,
    data: {
        pageTitle: 'contractual'
    }
  }, 
  {
    path: 'pos-list',
    component: PosListComponent,
    data: {
        pageTitle: 'pos-list'
    }
  }, 
  {
    path: 'pos',
    component: PosComponent,
    data: {
        pageTitle: 'pos'
    }
  }, 
  {
    path: 'ro-type-list',
    component: ROTypeListComponent,
    data: {
        pageTitle: 'ro-type-list'
    }
  },
  {
    path: 'ro-type',
    component: ROTypeComponent,
    data: {
        pageTitle: 'ro-type'
    }
  },
  {
    path: 'sp-type-list',
    component: SpTypeListComponent,
    data: {
        pageTitle: 'sp-type-list'
    }
  },
  {
    path: 'sp-type',
    component: SpTypeComponent,
    data: {
        pageTitle: 'sp-type'
    }
  },
  {
    path: 'firm-type-list',
    component: FirmTypeListComponent,
    data: {
        pageTitle: 'firm-type-list'
    }
  },
  {
    path: 'firm-type',
    component: FirmTypeComponent,
    data: {
        pageTitle: 'firm-type'
    }
  },
  {
    path: 'type-call-list',
    component: TypeCallListComponent,
    data: {
        pageTitle: 'type-call-list'
    }
  },
  {
    path: 'type-call',
    component: TypeCallComponent,
    data: {
        pageTitle: 'type-call'
    }
  },  
  {
    path: 'action-list',
    component: ActionListComponent,
    data: {
        pageTitle: 'action-list'
    }
  },
  {
    path: 'action',
    component: ActionComponent,
    data: {
        pageTitle: 'action'
    }
  },
  {
    path: 'dropped-reason-list',
    component: DroppedReasonListComponent,
    data: {
        pageTitle: 'dropped-reason-list'
    }
  },
  {
    path: 'dropped-reason',
    component: DroppedReasonComponent,
    data: {
        pageTitle: 'dropped-reason'
    }
  },
  {
    path: 'work-request-list',
    component: WorkRequestListComponent,
    data: {
        pageTitle: 'work-request-list'
    }
  },
  {
    path: 'work-request',
    component: WorkRequestComponent,
    data: {
        pageTitle: 'work-request'
    }
  },
  {
    path: 'holiday-list',
    component: HolidayListComponent,
    data: {
        pageTitle: 'holiday-list'
    }
  },
  {
    path: 'holiday',
    component: HolidayComponent,
    data: {
        pageTitle: 'holiday'
    }
  },
  {
    path: 'lead-category-list',
    component: LeadCategoryListComponent,
    data: {
        pageTitle: 'lead-category-list'
    }
  },
  {
    path: 'lead-category',
    component: LeadCategoryComponent,
    data: {
        pageTitle: 'lead-category'
    }
  },
  {
    path: 'status-list',
    component: StatusListComponent,
    data: {
        pageTitle: 'status-list'
    }
  },
  {
    path: 'status',
    component: StatusComponent,
    data: {
        pageTitle: 'status'
    }
  },

  {
    path: 'status-mapping-list',
    component: StatusMappingListComponent,
    data: {
        pageTitle: 'status-mapping-list'
    }
  },

  {
    path: 'status-mapping',
    component: StatusMappingComponent,
    data: {
        pageTitle: 'status-mapping'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersetupRoutingModule { }
