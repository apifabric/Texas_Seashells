import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLCONSERVATIONSTATU_MODULE_DECLARATIONS, ShellConservationStatuRoutingModule} from  './ShellConservationStatu-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellConservationStatuRoutingModule
  ],
  declarations: SHELLCONSERVATIONSTATU_MODULE_DECLARATIONS,
  exports: SHELLCONSERVATIONSTATU_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellConservationStatuModule { }