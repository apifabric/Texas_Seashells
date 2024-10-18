import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLSCIENTIFICSTUDY_MODULE_DECLARATIONS, ShellScientificStudyRoutingModule} from  './ShellScientificStudy-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellScientificStudyRoutingModule
  ],
  declarations: SHELLSCIENTIFICSTUDY_MODULE_DECLARATIONS,
  exports: SHELLSCIENTIFICSTUDY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellScientificStudyModule { }