import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLCOLLECTOR_MODULE_DECLARATIONS, ShellCollectorRoutingModule} from  './ShellCollector-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellCollectorRoutingModule
  ],
  declarations: SHELLCOLLECTOR_MODULE_DECLARATIONS,
  exports: SHELLCOLLECTOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellCollectorModule { }