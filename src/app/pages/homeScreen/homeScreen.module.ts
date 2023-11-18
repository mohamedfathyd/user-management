import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routes } from './homeScreen.routing';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MaterialModule } from 'src/app/material.module';
import { OnlyNumberDirective } from 'src/app/shared/directives/NumberOnly.directive';
import { HomeScreenComponent } from './homeScreen/homeScreen.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    DataTablesModule,
    ChartsModule,
    Daterangepicker,
    NgxPermissionsModule.forChild(),
    NgxPaginationModule,
    NgxChartsModule,
    NgApexchartsModule,
    AdminModule,
    UserModule
  ],
  providers: [
    OnlyNumberDirective,
    DatePipe,
  ]
})


export class HomeScreenModule { }
