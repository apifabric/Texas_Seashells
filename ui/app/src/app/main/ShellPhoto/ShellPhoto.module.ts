import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHELLPHOTO_MODULE_DECLARATIONS, ShellPhotoRoutingModule} from  './ShellPhoto-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShellPhotoRoutingModule
  ],
  declarations: SHELLPHOTO_MODULE_DECLARATIONS,
  exports: SHELLPHOTO_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShellPhotoModule { }