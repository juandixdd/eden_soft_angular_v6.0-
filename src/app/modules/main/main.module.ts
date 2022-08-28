import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { MainRoutingModule } from './main-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
import { AccesoComponent } from './usuarios/acceso/acceso.component';

//? Importación de componentes principales


@NgModule({
  declarations: [
  
    AccesoComponent
  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
    MainRoutingModule,
    CoreTouchspinModule,
    NgApexchartsModule,
    Ng2FlatpickrModule,
    BreadcrumbModule

  ]
})
export class MainModule { }
