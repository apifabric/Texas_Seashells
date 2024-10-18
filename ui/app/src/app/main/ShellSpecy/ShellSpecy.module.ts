import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLSPECY_MODULE_DECLARATIONS, ShellSpecyRoutingModule} from  './ShellSpecy-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellSpecyRoutingModule
  ],
  declarations: SHELLSPECY_MODULE_DECLARATIONS,
  exports: SHELLSPECY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellSpecyModule { }