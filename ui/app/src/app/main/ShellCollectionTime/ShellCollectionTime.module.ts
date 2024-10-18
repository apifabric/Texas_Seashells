import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLCOLLECTIONTIME_MODULE_DECLARATIONS, ShellCollectionTimeRoutingModule} from  './ShellCollectionTime-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellCollectionTimeRoutingModule
  ],
  declarations: SHELLCOLLECTIONTIME_MODULE_DECLARATIONS,
  exports: SHELLCOLLECTIONTIME_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellCollectionTimeModule { }