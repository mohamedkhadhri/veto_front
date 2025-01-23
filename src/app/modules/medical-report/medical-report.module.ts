import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalReportRoutingModule } from './medical-report-routing.module';
import { MedicalReportComponent } from './medical-report.component';


@NgModule({
  declarations: [
    MedicalReportComponent
  ],
  imports: [
    CommonModule,
    MedicalReportRoutingModule
  ]
})
export class MedicalReportModule { }
