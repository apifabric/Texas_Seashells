import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellLocation-new',
  templateUrl: './ShellLocation-new.component.html',
  styleUrls: ['./ShellLocation-new.component.scss']
})
export class ShellLocationNewComponent {
  @ViewChild("ShellLocationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}