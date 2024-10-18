import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLLOCATION_MODULE_DECLARATIONS, ShellLocationRoutingModule} from  './ShellLocation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellLocationRoutingModule
  ],
  declarations: SHELLLOCATION_MODULE_DECLARATIONS,
  exports: SHELLLOCATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellLocationModule { }