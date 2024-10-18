import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLCOLOR_MODULE_DECLARATIONS, ShellColorRoutingModule} from  './ShellColor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellColorRoutingModule
  ],
  declarations: SHELLCOLOR_MODULE_DECLARATIONS,
  exports: SHELLCOLOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellColorModule { }