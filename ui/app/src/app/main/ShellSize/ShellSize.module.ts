import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLSIZE_MODULE_DECLARATIONS, ShellSizeRoutingModule} from  './ShellSize-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellSizeRoutingModule
  ],
  declarations: SHELLSIZE_MODULE_DECLARATIONS,
  exports: SHELLSIZE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellSizeModule { }