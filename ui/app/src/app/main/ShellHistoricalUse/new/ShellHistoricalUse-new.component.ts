import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellHistoricalUse-new',
  templateUrl: './ShellHistoricalUse-new.component.html',
  styleUrls: ['./ShellHistoricalUse-new.component.scss']
})
export class ShellHistoricalUseNewComponent {
  @ViewChild("ShellHistoricalUseForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}