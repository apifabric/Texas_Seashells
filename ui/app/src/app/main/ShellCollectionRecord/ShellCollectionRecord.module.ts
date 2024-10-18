import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLCOLLECTIONRECORD_MODULE_DECLARATIONS, ShellCollectionRecordRoutingModule} from  './ShellCollectionRecord-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellCollectionRecordRoutingModule
  ],
  declarations: SHELLCOLLECTIONRECORD_MODULE_DECLARATIONS,
  exports: SHELLCOLLECTIONRECORD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellCollectionRecordModule { }