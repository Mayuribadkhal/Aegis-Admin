import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { StateListComponent } from './state-list/state-list.component';
import { StateComponent } from './state/state.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityComponent } from './city/city.component';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaComponent } from './area/area.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankComponent } from './bank/bank.component';
import { PaymentmodeListComponent } from './paymentmode-list/paymentmode-list.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { TransportmodeListComponent } from './transportmode-list/transportmode-list.component';
import { TransportmodeComponent } from './transportmode/transportmode.component';
import { ApplicationMasterComponent } from './application-master/application-master.component';
import { ApplicationComponent } from './application/application.component';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { ZoneComponent } from './zone/zone.component';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionComponent } from './region/region.component';
import { PdcQuestionListComponent } from './pdc-question-list/pdc-question-list.component';
import { PdcQuestionComponent } from './pdc-question/pdc-question.component';
import { UserroleListComponent } from './userrole-list/userrole-list.component';
import { UserroleComponent } from './userrole/userrole.component';
import { ManufactureListComponent } from './manufacture-list/manufacture-list.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantComponent } from './plant/plant.component';
import { CylinderProviderListComponent } from './cylinder-provider-list/cylinder-provider-list.component';
import { CylinderProviderComponent } from './cylinder-provider/cylinder-provider.component';
import { GodownListComponent } from './godown-list/godown-list.component';
import { GodownComponent } from './godown/godown.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [StateListComponent, StateComponent, CityListComponent, CityComponent, AreaListComponent, AreaComponent, BankListComponent, BankComponent, PaymentmodeListComponent, PaymentmodeComponent, TransportmodeListComponent, TransportmodeComponent, ApplicationMasterComponent, ApplicationComponent, ZoneListComponent, ZoneComponent, RegionListComponent, RegionComponent, PdcQuestionListComponent, PdcQuestionComponent, UserroleListComponent, UserroleComponent, ManufactureListComponent, ManufactureComponent, PlantListComponent, PlantComponent, CylinderProviderListComponent, CylinderProviderComponent, GodownListComponent, GodownComponent, DepartmentListComponent, DepartmentComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
