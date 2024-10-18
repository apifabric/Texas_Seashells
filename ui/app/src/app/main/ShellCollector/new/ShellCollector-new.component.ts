import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellCollector-new',
  templateUrl: './ShellCollector-new.component.html',
  styleUrls: ['./ShellCollector-new.component.scss']
})
export class ShellCollectorNewComponent {
  @ViewChild("ShellCollectorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}