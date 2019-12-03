import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateListComponent } from '@app/features/master/state-list/state-list.component';
import { StateComponent } from '@app/features/master/state/state.component';
import { CityListComponent } from '@app/features/master/city-list/city-list.component';
import { CityComponent } from '@app/features/master/city/city.component';
import { AreaListComponent } from '@app/features/master/area-list/area-list.component';
import { AreaComponent } from '@app/features/master/area/area.component';
import { BankListComponent } from '@app/features/master/bank-list/bank-list.component';
import { BankComponent } from '@app/features/master/bank/bank.component';
import { PaymentmodeListComponent } from '@app/features/master/paymentmode-list/paymentmode-list.component';
import { PaymentmodeComponent } from '@app/features/master/paymentmode/paymentmode.component';
import { TransportmodeListComponent } from '@app/features/master/transportmode-list/transportmode-list.component';
import { TransportmodeComponent } from '@app/features/master/transportmode/transportmode.component';
import { ApplicationMasterComponent } from '@app/features/master/application-master/application-master.component';
import { ApplicationComponent } from '@app/features/master/application/application.component';
import { ZoneListComponent } from '@app/features/master/zone-list/zone-list.component';
import { ZoneComponent } from '@app/features/master/zone/zone.component';
import { RegionListComponent } from '@app/features/master/region-list/region-list.component';
import { RegionComponent } from '@app/features/master/region/region.component';
import { PdcQuestionListComponent } from '@app/features/master/pdc-question-list/pdc-question-list.component';
import { PdcQuestionComponent } from '@app/features/master/pdc-question/pdc-question.component';
import { UserroleListComponent } from '@app/features/master/userrole-list/userrole-list.component';
import { UserroleComponent } from '@app/features/master/userrole/userrole.component';
import { ManufactureListComponent } from '@app/features/master/manufacture-list/manufacture-list.component';
import { ManufactureComponent } from '@app/features/master/manufacture/manufacture.component';
import { PlantListComponent } from '@app/features/master/plant-list/plant-list.component';
import { PlantComponent } from '@app/features/master/plant/plant.component';
import { CylinderProviderListComponent } from '@app/features/master/cylinder-provider-list/cylinder-provider-list.component';
import { CylinderProviderComponent } from '@app/features/master/cylinder-provider/cylinder-provider.component';
import { GodownListComponent } from '@app/features/master/godown-list/godown-list.component';
import { GodownComponent } from '@app/features/master/godown/godown.component';
import { DepartmentListComponent } from '@app/features/master/department-list/department-list.component';
import { DepartmentComponent } from '@app/features/master/department/department.component';

const routes: Routes = [
  {
    path: 'state-list',
    component: StateListComponent,
    data: {
        pageTitle: 'state-list'
    }
  },
  {
    path: 'state',
    component: StateComponent,
    data: {
        pageTitle: 'state'
    }
  },
  {
    path: 'city-list',
    component: CityListComponent,
    data: {
        pageTitle: 'city'
    }
  },
  {
    path: 'city',
    component: CityComponent,
    data: {
        pageTitle: 'city'
    }
  },
  {
    path: 'area-list',
    component: AreaListComponent,
    data: {
        pageTitle: 'Area-list'
    }
  },
  {
    path: 'area',
    component: AreaComponent,
    data: {
        pageTitle: 'Area'
    }
  },
  {
    path: 'bank-list',
    component: BankListComponent,
    data: {
        pageTitle: 'bank-list'
    }
  },
  {
    path: 'bank',
    component: BankComponent,
    data: {
        pageTitle: 'bank'
    }
  },
  {
    path: 'paymentmode-list',
    component: PaymentmodeListComponent,
    data: {
        pageTitle: 'payment-mode'
    }
  },
  {
    path: 'paymentmode',
    component: PaymentmodeComponent,
    data: {
        pageTitle: 'paymentmode'
    }
  },
  {
    path: 'transportmode-list',
    component: TransportmodeListComponent,
    data: {
        pageTitle: 'transportmode-list'
    }
  },
  {
    path: 'transportmode',
    component: TransportmodeComponent,
    data: {
        pageTitle: 'transportmode'
    }
  },
  {
    path: 'application-list',
    component: ApplicationMasterComponent,
    data: {
        pageTitle: 'application-list'
    }
  },
  {
    path: 'application',
    component: ApplicationComponent,
    data: {
        pageTitle: 'application'
    }
  },
  {
    path: 'userrole-list',
    component: UserroleListComponent,
    data: {
        pageTitle: 'userrole-list'
    }
  },
  {
    path: 'userrole',
    component: UserroleComponent,
    data: {
        pageTitle: 'userrole'
    }
  },
  {
    path: 'zone-list',
    component: ZoneListComponent,
    data: {
        pageTitle: 'zone-list'
    }
  },
  {
    path: 'zone',
    component: ZoneComponent,
    data: {
        pageTitle: 'zone'
    }
  },
  {
    path: 'region-list',
    component: RegionListComponent,
    data: {
        pageTitle: 'region-list'
    }
  },
  {
    path: 'region',
    component: RegionComponent,
    data: {
        pageTitle: 'region'
    }
  },
  {
    path: 'pdc-question-list',
    component: PdcQuestionListComponent,
    data: {
        pageTitle: 'pdc-question-list'
    }
  },
  {
    path: 'pdc-question',
    component: PdcQuestionComponent,
    data: {
        pageTitle: 'pdc-question'
    }
  },
  {
    path: 'manufacture-list',
    component: ManufactureListComponent,
    data: {
        pageTitle: 'manufacture-list'
    }
  },
  {
    path: 'manufacture',
    component: ManufactureComponent,
    data: {
        pageTitle: 'manufacture'
    }
  },    

  {
    path: 'plant-list',
    component: PlantListComponent,
    data: {
        pageTitle: 'plant-list'
    }
  }, 
  {
    path: 'plant',
    component: PlantComponent,
    data: {
        pageTitle: 'plant'
    }
  },  
  {
    path: 'plant',
    component: PlantComponent,
    data: {
        pageTitle: 'plant'
    }
  }, 
  {
    path: 'cylinderProvider-list',
    component: CylinderProviderListComponent,
    data: {
        pageTitle: 'cylinderProvider-list'
    }
  }, 
  {
    path: 'cylinderProvider',
    component: CylinderProviderComponent,
    data: {
        pageTitle: 'cylinderProvider'
    }
  },
  {
    path: 'godown-list',
    component: GodownListComponent,
    data: {
        pageTitle: 'godown-list'
    }
  },
  {
    path: 'godown',
    component: GodownComponent,
    data: {
        pageTitle: 'godown-list'
    }
  },
  {
    path: 'department-list',
    component: DepartmentListComponent,
    data: {
        pageTitle: 'department-list'
    }
  },
  {
    path: 'department',
    component: DepartmentComponent,
    data: {
        pageTitle: 'department'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
