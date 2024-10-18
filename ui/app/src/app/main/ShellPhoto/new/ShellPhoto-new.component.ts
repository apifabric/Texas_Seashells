import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellPhoto-new',
  templateUrl: './ShellPhoto-new.component.html',
  styleUrls: ['./ShellPhoto-new.component.scss']
})
export class ShellPhotoNewComponent {
  @ViewChild("ShellPhotoForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}