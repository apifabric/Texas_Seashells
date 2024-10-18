import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLHISTORICALUSE_MODULE_DECLARATIONS, ShellHistoricalUseRoutingModule} from  './ShellHistoricalUse-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellHistoricalUseRoutingModule
  ],
  declarations: SHELLHISTORICALUSE_MODULE_DECLARATIONS,
  exports: SHELLHISTORICALUSE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellHistoricalUseModule { }